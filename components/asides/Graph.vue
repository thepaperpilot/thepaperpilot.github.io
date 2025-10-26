<template>
  <ExpandableAside>
    <div class="graph" ref="graphEl"></div>
  </ExpandableAside>
</template>

<script setup lang="ts">
import cytoscape, { type Core } from "cytoscape";
import ExpandableAside from "./ExpandableAside.vue";

const graphEl = useTemplateRef("graphEl");
const cy = ref<Core>();

const { data } = await useFetch("/api/manifest", {
  server: true,
  lazy: false,
});

const route = useRoute();
const currentPage = computed(() => {
  if (route.path === "/") {
    return "home";
  } else if (route.path.startsWith("/garden/")) {
    return route.path.slice(8);
  }
  return route.path.slice(1);
});

const observer = new ResizeObserver(centerOnCurrentPage);

function centerOnCurrentPage() {
  const node = cy.value?.$id(currentPage.value);
  if (node && node.nonempty()) {
    cy.value?.nodes(":selected").deselect();
    node.select();
    cy.value?.center(node);
  }
  cy.value?.zoom(1);
}
watch(currentPage, centerOnCurrentPage);

watch([graphEl, data], ([graphEl, data]) => {
  cy.value?.destroy();
  if (graphEl != null && data != null) {
    observer.disconnect();
    observer.observe(graphEl);

    cy.value = cytoscape({
      container: graphEl,
      elements: {
        nodes: [
          ...Object.keys(data.pages ?? {}).map((key) => ({
            data: { id: key, label: data.pages[key] },
          })),
          { data: { id: "home", label: "Home", url: "/" } },
          { data: { id: "about", label: "About Me", url: "/about" } },
          { data: { id: "friends", label: "Friends", url: "/friends" } },
          { data: { id: "blogroll", label: "Blogroll", url: "/blogroll" } },
        ],
        edges: [
          ...(data.referenceEdges?.map((edge) => ({
            data: { ...edge, type: "reference" },
          })) ?? []),
          ...(data.tagEdges?.map((edge) => ({
            data: { ...edge, type: "tag" },
          })) ?? []),
          {
            data: {
              source: "home",
              target: "digital-gardens",
              type: "reference",
            },
          },
          {
            data: {
              source: "about",
              target: "my-projects",
              type: "reference",
            },
          },
          {
            data: {
              source: "about",
              target: "fediverse",
              type: "reference",
            },
          },
          {
            data: {
              source: "about",
              target: "digital-gardens",
              type: "reference",
            },
          },
          {
            data: {
              source: "friends",
              target: "my-projects",
              type: "reference",
            },
          },
        ],
      },
      layout: { name: "preset" }, // temporary, we’ll run COSE after degree calc
      autoungrabify: true,
      style: [
        {
          selector: "node[degree]",
          style: {
            label: "data(label)",
            "text-valign": "bottom",
            "text-halign": "center",
            color: "#3b4252",
            "background-color": "#88c0d0",
            "font-size": "16px",
            "text-opacity": 1,
            width: "mapData(degree, 1, 20, 20, 80)",
            height: "mapData(degree, 1, 20, 20, 80)",
            "z-index": -1,
          },
        },
        {
          selector: "node:selected",
          style: {
            "background-color": "#a3be8c",
          },
        },
        {
          selector: ".dimmed",
          style: {
            opacity: 0.2,
            "z-index": -2,
          },
        },
        {
          selector: "edge",
          style: {
            width: 2,
            "curve-style": "bezier",
            "target-arrow-shape": "triangle",
            "arrow-scale": 1.5,
          },
        },
        {
          selector: 'edge[type = "reference"]',
          style: {
            "line-color": "#ebcb8b",
            "target-arrow-color": "#ebcb8b",
            "control-point-distance": 40,
          },
        },
        {
          selector: 'edge[type = "tag"]',
          style: {
            "line-color": "#b48ead",
            "target-arrow-color": "#b48ead",
            "control-point-distance": -40,
          },
        },
      ],
    });

    console.log(cy.value);

    // Hide labels when zoomed out
    let labelVisible = true;
    cy.value.on("zoom", () => {
      const zoom = cy.value!.zoom();
      const minReadableZoom = 0.5;
      const shouldShow = zoom >= minReadableZoom;
      if (shouldShow !== labelVisible) {
        labelVisible = shouldShow;
        cy.value!.nodes().style("text-opacity", shouldShow ? 1 : 0);
      }
    });

    // Dim elements unrelated to selected node
    cy.value.on("select unselect", "node", (e) => {
      const selected = cy.value!.nodes(":selected");
      if (selected.length === 0) {
        cy.value!.elements().removeClass("dimmed");
      } else {
        const connected = selected.closedNeighborhood();
        cy.value!.elements().addClass("dimmed");
        connected.removeClass("dimmed");
      }
    });

    // Calculate degrees, then apply COSE layout
    cy.value.nodes().forEach((node) => {
      const degree = node.connectedEdges().length;
      node.data("degree", degree);
    });
    cy.value.style().update();
    cy.value
      .layout({
        name: "cose",
        animate: false,
        idealEdgeLength: 100,
        nodeRepulsion: 1000000,
        gravity: 0.02,
        nodeOverlap: 100,
      })
      .run();

    // Find current node and center on it
    centerOnCurrentPage();
    cy.value.on("resize", centerOnCurrentPage);

    // Navigate to node on tap
    cy.value.on("tap", "node", (e) => {
      if (e.target.selected()) {
        window.location.href =
          e.target.data("url") ?? `/garden/${e.target.id()}`;
      }
    });
  }
});
</script>

<style lang="css" scoped>
.graph {
  width: calc(100% + 60px);
  height: calc(100% + 60px);
  margin: -30px;
}
</style>
