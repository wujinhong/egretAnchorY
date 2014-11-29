class ButttonBase extends egret.Sprite {
    private wd: number;
    private hd: number;
    private clr: number;
    private _calpha: number;
    private icoName: string;

    private ispress: boolean = false;
    private xpress: number = 0;
    private ypress: number = 0;

    protected ico: egret.Bitmap;

    protected scale1: number = 0.95;
    protected scale2: number = 1;


    public constructor(width: number, height: number, color: number, icoN: string, al: number) {
        super();
        
        //ScreenUtil.getInstance().showLog("-------h2");
        this.wd = width;
        this.hd = height;
        this. clr = color;
        this.icoName = icoN;
        this._calpha = al;
        
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this); ScreenUtil.getInstance().showLog("-------h3");
    }
    protected onAddToStage(): void {
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchStart, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchOut, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        
        this.initButton();
        this.addIcon();

        this.anchorX = this.anchorY = 0.5;
        
    }
    private addIcon(): void {
        if (this.icoName != "") {
            this.ico = this.createBitmapByName(this.icoName);
            this.addChild(this.ico);
        }
    }
    private initButton(): void {
        //var shp: egret.Shape = new egret.Shape();
        this.graphics.beginFill(this.clr,this._calpha);
        this.graphics.drawRect(0, 0, this.wd, this.hd);
        //this.x = -this.wd / 2;
        //this.y = -this.hd / 2;
       this.graphics.endFill();
        // this.addChild(shp);

        this.width = this.wd;
        this.height = this.hd;
    }
    protected createBitmapByName(name: string): egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        result.anchorX = result.anchorY = 0;
        var ww: number = this.wd / result.width;
        var hh: number = this.hd / result.height;
        var sc: number = Math.min(ww, hh);
        result.x = (this.width - result.width * sc )/2;
        result.y = (this.height-result.height * sc)/ 2;

        result.scaleX = result.scaleY = sc;
        return result;
    }

    protected touchShowStart(): void {
        
        this.ispress = true;
        egret.Tween.removeTweens(this);
        var tw: egret.Tween = egret.Tween.get(this);
        tw.to({ scaleX: this.scale1, scaleY: this.scale1 }, 50);
    }
    protected touchShowEnd(): void {
        this.ispress = false;
        egret.Tween.removeTweens(this);
        var tw: egret.Tween = egret.Tween.get(this);
        tw.to({ scaleX: this.scale2, scaleY: this.scale2 }, 200);
    }
    public onTouchStart(e: egret.TouchEvent): void {
        this.xpress = e.localX;
        this.ypress = e.localY;
        this.touchShowStart();
    }

    public onTouchOut(e: egret.TouchEvent): void {
        this.touchShowEnd();
    }
    public onTouchMove(e: egret.TouchEvent): void {
        var xx: number = e.localX;
        var yy: number = e.localY;

        var dxx: number = xx - this.xpress;
        var dyy: number = yy - this.ypress;
        
        if (dxx * dxx + dyy * dyy > 100) {
            this.touchShowEnd();
        }
    }
    public onTouchEnd(e: egret.TouchEvent): void {
        if (this.ispress) {
            this.touchShowEnd();
            var ee = new egret.Event("change");
            ee.data = "main";
            EventManager.dispatcher.dispatchEvent(ee);
        }
    }
}