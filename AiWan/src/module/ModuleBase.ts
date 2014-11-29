class ModuleBase extends egret.DisplayObjectContainer{
    protected clear(): void {
    }
    public distory() {
        this.clear();
    }

    protected moduletype = ""

    private endfc: Function;
    private endTarget: any;
    public constructor() {
        super();
    }
    public startLoad(fc: Function, tg: any): void {
        this.endfc = fc;
        this.endTarget = tg;
        Loader.getInstance().loadResource(this.moduletype, this.onloadCompelete, this);
    }
    public onloadCompelete(): void {
        
    }
    public onCreateComplete(): void {
        this.endfc.apply(this.endTarget);
    }

    
    protected onaddMove(tg: egret.DisplayObject, min: number, max: number): void {
        
        this.moveTarget = tg; 
        this.min = min; 
        this.max = max; 
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this); 
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this); 
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this); 

    }

    private moveTarget: egret.DisplayObject;
    private ismove: boolean = false;
    private xpress: number;
    private ypress: number;
    private xpressposition: number;
    private ypressposition: number;
    private min: number;
    private max: number;
    

    private onTouchBegin(e: egret.TouchEvent): void {
        this.xpress = e.localX;
        this.ypress = e.localY;
    }
    private onTouchMove(e: egret.TouchEvent): void {
        var dxx: number = e.localX - this.xpress;
        var dyy: number = e.localY - this.ypress;
        if (this.ismove == false) {
            if (dxx * dxx + dyy * dyy > 100) {
                this.ismove = true;
                this.xpress = e.localX;
                this.ypress = e.localY;
                this.xpressposition = this.moveTarget.x;
                this.ypressposition = this.moveTarget.y;

                ScreenUtil.getInstance().showLog(this.ypressposition+"/"+this.moveTarget.y+"--1");
            }
        }else if (this.ismove) {
            //this.moveTarget.x= this.xpressposition + dxx;
            var yp: number = this.ypressposition + dyy;
            if (yp < this.min) yp = this.min;
            if (yp > this.max) yp = this.max;
            this.moveTarget.y = yp;
        }
    }
    private onTouchEnd(e: egret.TouchEvent): void {
        this.ismove = false;
    }
}