class ButtonDown extends  ButttonBase {

    public isselected: boolean = false;
    private showIndex: number = 0;
    protected ico2: egret.Bitmap;
    protected icostr: string;
    public constructor(width: number, height: number, color: number, icoN: string,ico2:string,sc:number) {
        super(width, height, color, icoN,0);
        this.icostr = ico2;
        this.scale2 = sc;
        this.scale1 = 0.95*sc / 1;
    }
    protected onAddToStage(): void {
        super.onAddToStage();
        this.addIcon2();
        this.showIco();
    }
    private addIcon2(): void {
            this.ico2 = this.createBitmapByName(this.icostr);
            
    }
    
    protected touchShowEnd(): void {
        super.touchShowEnd();
        this.showIndex = 0;
        this.showIco();
    }
    public onTouchStart(e: egret.TouchEvent): void {
        super.touchShowStart();
        this.showIndex = 1;
        this.showIco();
    }

    private showIco(): void {
        if (this.showIndex == 0 && this.isselected == false) {
            this.addChild(this.ico);
            if (this.contains(this.ico2)) {
                this.removeChild(this.ico2);
                }
            } else {
                this.addChild(this.ico2);
            if (this.contains(this.ico)) {
                this.removeChild(this.ico);
                }
          }
    }
    
}