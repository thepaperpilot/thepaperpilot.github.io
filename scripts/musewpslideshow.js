/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2012 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
(function(a, b, c, d, f) {
  c.Plugins.SlideShowCaptions = {
    defaultOptions: {
      captionClassName: "SSSlideCaption"
    },
    initialize: function(b, c) {
      var d = this;
      a.extend(c, a.extend({}, d.defaultOptions, c));
      b.bind("attach-behavior", function() {
        d._attachBehavior(b)
      })
    },
    _attachBehavior: function(a) {
      var b = a._findWidgetElements("." + a.options.captionClassName);
      if (b.length) a._sscpCaptions = b, b.css("display", "none"), a.slides.bind("wp-panel-show", function(a, c) {
        b.eq(c.panelIndex).css("display", "block")
      }), a.slides.bind("wp-panel-hide",
        function(a, c) {
          b.eq(c.panelIndex).css("display", "none")
        }), a.bind("ready", function() {
        b.eq(a.slides.activeIndex).css("display", "block")
      })
    }
  };
  c.Plugins.SlideShowLabel = {
    defaultOptions: {
      labelClassName: "SlideShowLabel"
    },
    initialize: function(b, c) {
      var d = this;
      a.extend(c, a.extend({}, d.defaultOptions, c));
      b.bind("attach-behavior", function() {
        d._attachBehavior(b)
      })
    },
    _attachBehavior: function(a) {
      var b = this,
        c = a._findWidgetElements("." + a.options.labelClassName);
      if (c.length) a._$sslpLabels = c, a.slides.bind("wp-panel-show",
        function() {
          b._updateLabels(a)
        }), a.bind("ready", function() {
        b._updateLabels(a)
      })
    },
    _findAllTextNodes: function(a, b) {
      b = b || [];
      switch (a.nodeType) {
        case 3:
          b.push(a);
          break;
        case 1:
          if (a.nodeName.toLowerCase() !== "script")
            for (var c = a.firstChild; c;) this._findAllTextNodes(c, b), c = c.nextSibling
      }
      a.nextSibling && this._findAllTextNodes(a.nextSibling, b);
      return b
    },
    _updateLabels: function(a) {
      var b = this,
        c = a.slides,
        d = c.activeIndex + 1,
        f = c.$element.length;
      a._$sslpLabels.each(function() {
        for (var a = b._findAllTextNodes(this), c = a.length,
            g = 0, h = function(a) {
              return ++g === 1 ? d : g === 2 ? f : a
            }, p = 0; p < c; p++) {
          var n = a[p],
            s = n.nodeValue,
            v = s.replace(/\d+/g, h);
          if (v !== s) n.nodeValue = v
        }
      })
    }
  };
  c.Plugins.Lightbox = {
    defaultOptions: {
      lightboxPartsSelector: ".PamphletLightboxPart",
      closeBtnClassName: "PamphletCloseButton"
    },
    initialize: function(b, c) {
      var d = this;
      a.extend(c, a.extend({}, d.defaultOptions, c));
      b._sslbpAutoPlay = c.autoPlay;
      c.autoPlay = !1;
      b.bind("before-transform-markup", function() {
        d._beforeTransformMarkup(b)
      });
      b.bind("attach-behavior", function() {
        d._attachBehavior(b)
      })
    },
    _beforeTransformMarkup: function(a) {
      a._sslbpShownInitially = !0;
      var b = a._findWidgetElements("." + a.options.slideClassName);
      if (b.filter(":hidden").length == 0) a._sslbpSlideOffset = b.offset();
      else {
        a._sslbpShownInitially = !1;
        var d = a._findWidgetElements("." + a.options.viewClassName);
        a._sslbpSlideOffset = {
          top: c.Utils.getCSSIntValue(d, "top") + c.Utils.getCSSIntValue(b, "top"),
          left: c.Utils.getCSSIntValue(d, "left") + c.Utils.getCSSIntValue(b, "left")
        }
      }
    },
    _attachBehavior: function(a) {
      var b = this,
        d = a.options;
      a.tabs.$element.bind(d.event,
        function() {
          b._openLightbox(a)
        });
      a.slides.bind("wp-panel-before-show", function() {
        b._openLightbox(a)
      });
      if (c.Browser.Features.Touch && d.elastic === "fullScreen") a.slides.$element.not("a[href]").on("click", function() {
        b._closeLightbox(a)
      });
      a._$sslbpCloseBtn = a._findWidgetElements("." + d.closeBtnClassName).bind("click", function() {
        b._closeLightbox(a)
      });
      b._initializeMarkup(a)
    },
    _initializeMarkup: function(b) {
      var d = b.options,
        f = d.elastic !== "off",
        j = b._findWidgetElements("." + d.viewClassName),
        i = b.slides.$element,
        l = j,
        m = b._sslbpSlideOffset,
        o = i.outerWidth(),
        q = i.outerHeight(),
        p = b._findWidgetElements(d.lightboxPartsSelector),
        l = a(j[0].parentNode).filter("." + d.clipClassName);
      l.length === 0 && (l = j);
      p.each(function(d, k) {
        var i = a(k);
        if (i.css("position") !== "fixed") {
          var j = b._sslbpShownInitially ? i.offset() : {
              top: c.Utils.getCSSIntValue(i, "top"),
              left: c.Utils.getCSSIntValue(i, "left")
            },
            l = {
              top: j.top - m.top
            };
          if (!f) l.left = j.left - m.left;
          i.css(l)
        }
      }).addClass("popup_element");
      var n = a('<div id="' + (j.attr("id") || "") + '"></div>').css({
          left: 0,
          top: 0,
          width: "auto",
          height: "auto",
          padding: 0,
          margin: 0,
          zIndex: "auto"
        }),
        s;
      f && (s = a("<div/>"), d.elastic === "fullScreen" ? s.addClass("fullscreen") : d.elastic === "fullWidth" && s.addClass("fullwidth"), s.css({
        paddingLeft: j.css("padding-left"),
        paddingRight: j.css("padding-right"),
        paddingTop: j.css("padding-top"),
        paddingBottom: j.css("padding-bottom"),
        borderColor: j.css("border-left-color"),
        borderStyle: j.css("border-left-style"),
        borderLeftWidth: j.css("border-left-width"),
        borderRightWidth: j.css("border-right-width"),
        borderTopWidth: j.css("border-top-width"),
        borderBottomWidth: j.css("border-bottom-width")
      }), s.append(l), s.append(p), n.css({
        border: "none"
      }));
      j.removeAttr("id");
      var v = a("<div class='overlayWedge'></div>").insertBefore(i[0]);
      n.append(j.children().not("." + d.slideClassName));
      j.append(i);
      n.css({
        visibility: "hidden"
      }).appendTo(document.body);
      var j = n.outerWidth(),
        x = n.outerHeight();
      n.detach().css({
        visibility: ""
      });
      l.css({
        position: d.elastic === "fullScreen" ? "relative" : "absolute",
        padding: 0,
        left: d.elastic === "fullWidth" ? "" : 0,
        top: 0,
        borderWidth: 0,
        background: "none"
      });
      d.elastic !== "fullScreen" && l.css({
        width: o,
        height: q
      });
      d.transitionStyle === "fading" && i.css({
        position: "absolute",
        left: 0,
        top: 0
      });
      var y;
      if (b._fstpPositionSlides || b._csspResizeFullScreenImages) y = function(a, c) {
        b._fstpPositionSlides && b._fstpPositionSlides(a, c);
        b._csspResizeFullScreenImages && b._csspResizeFullScreenImages(b, b.slides.$element, d.heroFitting)
      };
      o = -o / 2;
      q = -q / 2;
      l = a("<div class='LightboxContent'></div>").css({
        position: "absolute"
      }).append(f ? s : l);
      f || l.append(p);
      l.museOverlay({
        autoOpen: !1,
        offsetLeft: o,
        offsetTop: q,
        overlayExtraWidth: j,
        overlayExtraHeight: x,
        $overlaySlice: n,
        $overlayWedge: v,
        onClose: function() {
          b.stop();
          b.slides.hidePanel(b.slides.activeElement)
        },
        $elasticContent: s,
        resizeSlidesFn: y
      });
      if (a.browser.msie && a.browser.version < 9) {
        var F = n[0];
        c.Utils.needPIE(function() {
          PIE.detach(F);
          PIE.attach(F)
        })
      }
      b._$sslbpOverlay = l;
      b._csspIsImageSlideShow || i.each(function() {
        c.Utils.detachIframesAndObjectsToPauseMedia(a(this))
      })
    },
    _openLightbox: function(b) {
      var d = b._$sslbpOverlay;
      d.data("museOverlay").isOpen || (d.museOverlay("open"),
        b._sslbpAutoPlay && b.play());
      b._csspIsImageSlideShow || c.Utils.attachIframesAndObjectsToResumeMedia(a(b.slides.activeElement))
    },
    _closeLightbox: function(b) {
      b._$sslbpOverlay.data("museOverlay").isOpen && (b._$sslbpOverlay.museOverlay("close"), b._csspIsImageSlideShow || c.Utils.detachIframesAndObjectsToPauseMedia(a(b.slides.activeElement)))
    }
  };
  c.Plugins.ContentSlideShow = {
    defaultOptions: {
      displayInterval: 3E3,
      transitionDuration: 500,
      transitionStyle: "fading",
      contentLayout_runtime: "stack",
      event: "click",
      deactivationEvent: "none",
      hideAllContentsFirst: !1,
      shuffle: !1,
      resumeAutoplay: !1,
      resumeAutoplayInterval: 3E3,
      elastic: "off"
    },
    slideShowOverrides: {
      slideshowClassName: "SlideShowWidget",
      viewClassName: "SlideShowContentPanel",
      slideClassName: "SSSlide",
      slideLinksClassName: "SSSlideLinks",
      slideLinkClassName: "SSSlideLink",
      slideLinkActiveClassName: "SSSlideLinkSelected",
      slideCountClassName: "SSSlideCount",
      firstBtnClassName: "SSFirstButton",
      lastBtnClassName: "SSLastButton",
      prevBtnClassName: "SSPreviousButton",
      nextBtnClassName: "SSNextButton",
      playBtnClassName: "SSPlayButton",
      stopBtnClassName: "SSStopButton",
      closeBtnClassName: "SSCloseButton",
      heroFitting: "fitContentProportionally",
      thumbFitting: "fillFrameProportionally",
      lightboxPartsSelector: ".SlideShowCaptionPanel, .SSFirstButton, .SSPreviousButton, .SSNextButton, .SSLastButton, .SlideShowLabel, .SSCloseButton",
      lightboxEnabled_runtime: !1
    },
    compositionOverrides: {
      slideshowClassName: "PamphletWidget",
      viewClassName: "ContainerGroup",
      slideClassName: "Container",
      slideLinkClassName: "Thumb",
      slideLinkActiveClassName: "PamphletThumbSelected",
      prevBtnClassName: "PamphletPrevButton",
      nextBtnClassName: "PamphletNextButton",
      closeBtnClassName: "PamphletCloseButton",
      lightboxPartsSelector: ".PamphletLightboxPart"
    },
    initialize: function(d, f) {
      var h = this,
        j = d.$element.hasClass("SlideShowWidget"),
        i = j ? h.slideShowOverrides : h.compositionOverrides;
      d._csspIsImageSlideShow = j;
      this._restartTimer = 0;
      a.extend(f, a.extend({}, h.defaultOptions, i, f));
      if (f.hideAllContentsFirst) f.defaultIndex = -1;
      if (f.lightboxEnabled_runtime) f.contentLayout_runtime = "lightbox";
      if (f.elastic !==
        "off") d._csspPositionImage = h._positionImage;
      j && (b.Widget.ContentSlideShow.slideImageIncludePlugin.initialize(d, f), c.Plugins.SlideShowLabel.initialize(d, f), c.Plugins.SlideShowCaptions.initialize(d, f));
      f.transitionStyle == "fading" ? b.Widget.ContentSlideShow.fadingTransitionPlugin.initialize(d, f) : c.Browser.Features.Touch && f.enableSwipe === !0 ? b.Widget.ContentSlideShow.swipeTransitionPlugin.initialize(d, f) : b.Widget.ContentSlideShow.filmstripTransitionPlugin.initialize(d, f);
      b.Widget.ContentSlideShow.alignPartsToPagePlugin.initialize(d,
        f);
      if (f.contentLayout_runtime === "lightbox") {
        if (f.elastic !== "off") d._csspResizeFullScreenImages = h._resizeFullScreenImages;
        c.Plugins.Lightbox.initialize(d, f)
      }
      f.shuffle === !0 && b.Widget.ContentSlideShow.shufflePlayPlugin.initialize(d, f);
      d.bind("transform-markup", function() {
        h._transformMarkup(d)
      });
      d.bind("attach-behavior", function() {
        h._attachBehavior(d)
      })
    },
    _transformMarkup: function(b) {
      var d = b.options,
        f = b._findWidgetElements("." + d.viewClassName);
      if (d.transitionStyle !== "fading") {
        var j = a('<div class="' + d.clipClassName +
            '"/>'),
          i = b._findWidgetElements("." + d.slideClassName),
          b = i.outerWidth(),
          i = i.outerHeight();
        if (d.elastic === "fullScreen") j.addClass("fullscreen");
        else {
          var l = {
              position: "relative",
              width: b + "px",
              height: i + "px",
              overflow: "hidden"
            },
            m = f.css("position");
          if (m === "absolute") l.position = m, l.left = f.css("left"), l.top = f.css("top");
          else if (m === "fixed") {
            var o = c.Utils.getStyleSheetRuleById(c.Utils.getPageStyleSheet(), f.get(0).id);
            l.position = m;
            l.left = c.Utils.getRuleProperty(o, "left");
            l.top = c.Utils.getRuleProperty(o, "top");
            l.bottom = c.Utils.getRuleProperty(o, "bottom");
            l.right = c.Utils.getRuleProperty(o, "right")
          }
          j.css(l)
        }
        d.elastic !== "fullScreen" && f.css({
          width: b + "px",
          height: i + "px"
        });
        f.css({
          position: "relative",
          top: "0",
          left: "0",
          margin: "0",
          overflow: "hidden"
        }).wrap(j)
      } else m = f.css("position"), d.elastic !== "fullScreen" && m !== "fixed" && f.css({
        width: "0",
        height: "0"
      })
    },
    _attachBehavior: function(b) {
      var f = this,
        h = b.options,
        j = b.tabs,
        i = b.slides.$element,
        l = h.slideLinkActiveClassName,
        m = h.contentLayout_runtime === "lightbox";
      if (h.elastic !== "off" &&
        (f._resizeFullScreenImages(b, b.slides.$element, h.heroFitting), !m)) a(d).on("orientationchange resize", function() {
        f._resizeFullScreenImages(b, b.slides.$element, h.heroFitting)
      });
      if (m) h.hideAllContentsFirst = !0;
      if (j) {
        var o = j.$element;
        h.event === "mouseover" && o.bind("mouseenter", function() {
          var b = a(this);
          b.data("enter", !0);
          j.selectTab(o.index(b))
        });
        h.deactivationEvent === "mouseout_trigger" ? o.bind("mouseleave", function() {
            var c = a(this);
            c.data("enter", !1);
            b.slides.hidePanel(o.index(c))
          }) : h.deactivationEvent ===
          "mouseout_both" && (o.bind("mouseleave", function() {
            var c = a(this),
              d = o.index(c),
              f = i.eq(d);
            c.data("enter", !1);
            c.data("setTimeout") || (c.data("setTimeout", !0), setTimeout(function() {
              !f.data("enter") && !c.data("enter") && b.slides.hidePanel(d);
              c.data("setTimeout", !1)
            }, 300))
          }), i.bind("mouseenter", function() {
            a(this).data("enter", !0)
          }), i.bind("mouseleave", function() {
            var c = a(this),
              d = i.index(c),
              f = o.eq(d);
            c.data("enter", !1);
            f.data("setTimeout") || (f.data("setTimeout", !0), setTimeout(function() {
              !c.data("enter") && !f.data("enter") &&
                b.slides.hidePanel(d);
              f.data("setTimeout", !1)
            }, 300))
          }))
      }
      j && l && (h.hideAllContentsFirst || j.$element.eq(j.options.defaultIndex).addClass(l), b.slides.bind("wp-panel-show", function(a, b) {
        j.$element.eq(b.panelIndex).addClass(l)
      }).bind("wp-panel-hide", function(a, b) {
        j.$element.eq(b.panelIndex).removeClass(l)
      }));
      f._attachStopOnClickHandler(b, b.$firstBtn);
      f._attachStopOnClickHandler(b, b.$lastBtn);
      f._attachStopOnClickHandler(b, b.$previousBtn);
      f._attachStopOnClickHandler(b, b.$nextBtn);
      f._attachStopOnClickHandler(b,
        b.$playBtn);
      f._attachStopOnClickHandler(b, b.$stopBtn);
      f._attachStopOnClickHandler(b, b.$closeBtn);
      j && !m && f._attachStopOnClickHandler(b, j.$element);
      b._csspIsImageSlideShow || (b.slides.bind("wp-panel-hide", function(b, d) {
        c.Utils.detachIframesAndObjectsToPauseMedia(a(d.panel))
      }).bind("wp-panel-show", function(b, d) {
        c.Utils.attachIframesAndObjectsToResumeMedia(a(d.panel))
      }), i.each(function() {
        (this != b.slides.activeElement || h.hideAllContentsFirst) && c.Utils.detachIframesAndObjectsToPauseMedia(a(this))
      }))
    },
    _startRestartTimer: function(a) {
      this._stopRestartTimer();
      this._restartTimer = setTimeout(function() {
        a.play(!0)
      }, a.options.resumeAutoplayInterval + a.options.transitionDuration)
    },
    _stopRestartTimer: function() {
      this._restartTimer && clearTimeout(this._restartTimer);
      this._restartTimer = 0
    },
    _attachStopOnClickHandler: function(a, b) {
      var c = this;
      b.bind(a.options.event === "click" ? "click" : "mouseover", function() {
        a.stop();
        (a.options.autoPlay || a._sslbpAutoPlay) && a.options.resumeAutoplay && 0 < a.options.resumeAutoplayInterval && c._startRestartTimer(a)
      })
    },
    _hitTest: function(a, b) {
      b.outerWidth() ===
        0 && (b = b.children(".popup_anchor").children(".popup_element").eq(0));
      var c = b.offset(),
        c = {
          x: c.left,
          y: c.top,
          width: b.outerWidth(),
          height: b.outerHeight()
        };
      return a.pageX >= c.x && a.pageX <= c.x + c.width && a.pageY >= c.y && a.pageY <= c.y + c.height
    },
    _layoutThumbs: function(b) {
      var d = b.options,
        f = c.Utils.getStyleValue;
      b._findWidgetElements("." + d.slideLinksClassName).each(function() {
        var b = a(this).find("." + d.slideLinkClassName);
        firstThumb = b[0];
        tWidth = f(firstThumb, "width");
        tHeight = f(firstThumb, "height");
        gapH = f(firstThumb, "margin-right");
        gapV = f(firstThumb, "margin-bottom");
        borderL = f(firstThumb, "border-left-width");
        borderR = f(firstThumb, "border-right-width");
        borderT = f(firstThumb, "border-top-width");
        borderB = f(firstThumb, "border-bottom-width");
        gWidth = f(this, "width");
        paddingL = f(this, "padding-left");
        paddingT = f(this, "padding-top");
        maxNumThumb = Math.floor((gWidth + gapH) / (tWidth + borderL + borderR + gapH));
        gStyle = this.runtimeStyle ? this.runtimeStyle : this.style;
        numRow = Math.ceil(b.length / maxNumThumb);
        firstRowNum = b.length < maxNumThumb ? b.length : maxNumThumb;
        leftPos = leftMostPos = c.Utils.pixelRound((gWidth - (tWidth + borderL + borderR) * firstRowNum - gapH * (firstRowNum - 1)) / 2) + paddingL;
        topPos = paddingT;
        numInRow = 1;
        gStyle.height = (tHeight + borderT + borderB) * numRow + gapV * (numRow - 1) + "px";
        b.each(function() {
          numInRow > firstRowNum && (numInRow = 1, leftPos = leftMostPos, topPos += tHeight + borderT + borderB + gapV);
          numInRow++ > 1 && (leftPos += tWidth + borderL + borderR + gapH);
          var a = this.runtimeStyle ? this.runtimeStyle : this.style;
          a.marginRight = "0px";
          a.marginBottom = "0px";
          a.left = leftPos + "px";
          a.top = topPos +
            "px"
        })
      })
    },
    _resizeFullScreenImages: function(b, c, d) {
      c.each(function() {
        a(this).find("img").each(function() {
          this.complete && !a(this).hasClass(b.options.imageIncludeClassName) && b._csspPositionImage(this, d, b.options.elastic)
        })
      })
    },
    _setupImagePositioning: function(b, c, d, f) {
      var i = this;
      c.each(function() {
        a(this).find("img").each(function() {
          var b = this;
          b.complete ? i._positionImage(b, d, f) : a(b).load(function() {
            i._positionImage(b, d, f)
          })
        })
      })
    },
    _positionImage: function(b, k, h, j, i) {
      var l = a(d),
        m = b.runtimeStyle ? b.runtimeStyle :
        b.style,
        o = h === "fullWidth" || h === "fullScreen",
        q = h === "fullHeight" || h === "fullScreen",
        p = k == "fitContentProportionally";
      $img = a(b);
      o = o ? d.innerWidth ? d.innerWidth : l.width() : p ? $img.data("width") : $img.parent().width();
      l = q ? d.innerHeight ? d.innerHeight : l.height() : p ? $img.data("height") : $img.parent().height();
      j = j !== f ? j : c.Utils.getNaturalWidth(b);
      b = i !== f ? i : c.Utils.getNaturalHeight(b);
      h !== "off" && (j === 0 && (j = $img.data("imageWidth")), b === 0 && (b = $img.data("imageHeight")));
      if (o == j && l == b) m.marginTop = "0px", m.marginLeft = "0px";
      else {
        q = j;
        i = b;
        if (k == "fillFrameProportionally") {
          if (h !== "off" || j > o && b > l) k = j / o, h = b / l, k < h ? (i = b / k, q = o) : (i = l, q = j / h)
        } else if (k == "fitContentProportionally" && (h !== "off" || j > o || b > l)) k = j / o, h = b / l, k > h ? (i = b / k, q = j / k) : (i = b / h, q = j / h);
        m.width = c.Utils.pixelRound(q) + "px";
        m.height = c.Utils.pixelRound(i) + "px";
        m.marginTop = c.Utils.pixelRound((l - i) / 2) + "px";
        m.marginLeft = c.Utils.pixelRound((o - q) / 2) + "px"
      }
    }
  };
  a.extend(b.Widget.ContentSlideShow.slideImageIncludePlugin.defaultOptions, {
    imageIncludeClassName: "ImageInclude",
    slideLoadingClassName: "SSSlideLoading"
  });
  b.Widget.ContentSlideShow.prototype.defaultPlugins = [c.Plugins.ContentSlideShow];
  b.Widget.ContentSlideShow.prototype._getAjaxSrcForImage = function(b) {
    for (var c = a(d).data("ResolutionManager").getDataSrcAttrName(), f = c.length, j, i = 0; i < f; i++)
      if ((j = b.data(c[i])) && j.length) return j;
    return b.data("src")
  }
})(jQuery, WebPro, Muse, window);;
(function() {
  if (!("undefined" == typeof Muse || "undefined" == typeof Muse.assets)) {
    var a = function(a, b) {
      for (var c = 0, d = a.length; c < d; c++)
        if (a[c] == b) return c;
      return -1
    }(Muse.assets.required, "musewpslideshow.js");
    if (-1 != a) {
      Muse.assets.required.splice(a, 1);
      for (var a = document.getElementsByTagName("meta"), b = 0, c = a.length; b < c; b++) {
        var d = a[b];
        if ("generator" == d.getAttribute("name")) {
          "2014.2.0.284" != d.getAttribute("content") && Muse.assets.outOfDate.push("musewpslideshow.js");
          break
        }
      }
    }
  }
})();
