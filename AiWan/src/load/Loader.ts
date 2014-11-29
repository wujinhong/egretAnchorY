class Loader {

    private static _instance: Loader = new Loader();
    public static getInstance(): Loader {
        return this._instance;
    }
    public constructor() {
    }

    private endFunction: Function;
    private endTarget: any;

    private processFunc: Function;
    private processEndFunc: Function;

    private processTarget: any;

    public initProcess(fc: Function,endFC:Function, tg: any): void {
        this.processFunc = fc;
        this.processEndFunc = endFC;
        this.processTarget = tg;
    }
    public loadResource(groupName: string, func: Function, tag: any): void {
        this.endFunction = func;
        this.endTarget = tag;
        
        if (RES.isGroupLoaded(groupName) ) {
            this.endFunction.apply(this.endTarget);
        } else {
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            RES.loadGroup(groupName);
        }
       
    }

    /**
   * 资源组加载完成
   */
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        this.endFunction.apply(this.endTarget);

        this.processEndFunc.apply(this.processTarget);
    }
    /**
  * 资源组加载完成
  */
    private onItemLoadError(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        alert("加载失败！！！！");
    }
    /**
     * 资源组加载进度
     */
    private onResourceProgress(event: RES.ResourceEvent): void {
        this.processFunc.apply(this.processTarget, [event.itemsLoaded, event.itemsTotal]);
    }
}