
class ScreenUtil {
    private static _instance: ScreenUtil = new ScreenUtil();
    public static getInstance(): ScreenUtil {
        return this._instance;
    }
    public constructor() {
        
    }
    /**
    public screenWidth(): number {
        return document.documentElement.clientWidth;
    }
    public screenHeight(): number {
        
        return document.documentElement.clientHeight;
    }
    **/

    private logFC: Function;
    private logTarget: any;
    public initLog(fc: Function, tg: any): void {
        this.logFC = fc;
        this.logTarget = tg;
    }
    public showLog(msg: String): void {
        this.logFC.apply(this.logTarget,[msg]);
    }
}