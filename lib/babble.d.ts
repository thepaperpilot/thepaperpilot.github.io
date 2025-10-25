declare module 'babble.js' {
  interface Environment {
    numCharacters: number;
    puppetScale?: number;
    width?: number;
    height?: number;
    animations?: boolean;
    color?: string;
    assets: { name: string }[];
  }

  class Stage {
    constructor(
      element: string,
      environment: Environment,
      assets: Record<
        string,
        Record<
          string,
          {
            name: string;
            location: string;
          }
        >
      >,
      assetsPath: string,
      requestCallback: () => void,
      status: {
        log: (...args: any[]) => void;
        error: (...args: any[]) => void;
      } = console,
      enabled = true
    );

    environment: Environment;
    assets: Record<
      string,
      Record<
        string,
        {
          name: string;
          location: string;
        }
      >
    >;
    assetsPath: string;
    status: {
      log: (...args: any[]) => void;
      error: (...args: any[]) => void;
    };
    MOVE_DURATION: number;
    enabled: boolean;
    dirty: boolean;

    stage: PIXI.Container;
    renderer: PIXI.Renderer;
    screen: HTMLDivElement;
    background: PIXI.Container;
    puppetStage: PIXI.Container;
    foreground: PIXI.Container;
    lastFrame: number;
    puppets: Puppet[];
    listeners: { event: string; callback: () => void }[];

    registerPuppetListener(event: "string", callback: () => void);
    addAsset(
      id: string,
      asset: { name: string; location: string },
      callback: () => void
    );
    reloadAssets(callback: () => void);
    updateAsset(id: string);
    reloadPuppets();
    reattach(element: string);
    resize(e: unknown, width?: number, height?: number);
    updateEnvironment();
    createPuppet(puppet: PuppetOptions): Puppet;
    addPuppet(puppet: PuppetOptions, id: string): Puppet;
    removePuppet(id: string);
    clearPuppets();
    banishPuppets();
    getPuppet(id: string): Puppet | undefined;
    setPuppet(id: string, newPuppet: PuppetOptions): Puppet;
    getThumbnail(): string | null;
    gameLoop();
    getAsset(container: PIXI.Container, asset: Asset): PIXI.Container;
    update(delta: number);
  }

  interface Layer {
    name: string;
    head?: boolean;
    emote?: string | number;
    emoteLayer?: string;

    children?: Layer[];
    id?: string;

    scaleX?: number;
    scaleY?: number;
    x?: number;
    y?: number;
    rotation?: number;

    animation?: "FADE_ZOOM" | "FADE";
    duration?: number;
    delay?: number;
    easing?: keyof typeof PIXI.tween.Easing;
  }

  interface PuppetOptions {
    name: string;
    position: number;
    facingLeft: boolean;
    deadbonesStyle?: boolean;
    eyeBabbleDuration?: number;
    mouthBabbleDuration?: number;
    layers: { children: Layer[]; };
    emote?: string | number;
  }

  class Puppet {
    constructor(stage: Stage, puppet: PuppetOptions, id: string);

    babbling: boolean;
    puppet: PuppetOptions;
    stage: Stage;
    id: string;
    container: PIXI.Container;
    direction: number;
    position: number;
    target: number;
    facingLeft: boolean;
    deadbonesStyle: boolean;
    movingAnim: number;
    eyesDuration: number;
    deadbonesTargetY: number;
    deadbonesTargetRotation: number;
    eyeBabbleDuration: number;
    mouthBabbleDuration: number;
    jiggling: boolean;
    head: Layer[];
    particles: unknown[];
    emotes: Record<
      string,
      { name: string; base: Layer[]; eyes: Layer[]; mouth: Layer[] }
    >;

    static getInherit(layer: Layer, inherit: Partial<Layer>);
    // static handleLayer(assets: , layer: Layer, _handleLayer, bundles: )
    static createTween(layer: Layer, container: PIXI.Container);

    createLayer(layer: Layer, inherited?: Partial<Layer>);
    changeEmote(emote: string);
    setBabbling(babble: boolean);
    jiggle();
    update(updateBabble = true);
    updatePosition();
    updateEyeBabble();
    updateMouthBabble();
  }

  class Cutscene {
    constructor(
      stage: Stage,
      script: string[],
      actors: Record<string, PuppetOptions>,
      callback: () => void
    );

    stage: Stage;
    actors: Record<string, PuppetOptions>;
    actions: Record<
      string,
      (callback: () => void, action: Record<string, unknown>) => void
    >;

    start();

    parseNextAction(script: string[], callback: () => void);
  }
}
