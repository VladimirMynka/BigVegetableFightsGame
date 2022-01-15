export class Util {
    public static async sleep(ms: number): Promise<unknown> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms)
        });
    }

    public static randomInt(min = 0, max = 100): number {
        return Math.floor(Math.random() * (max - min) + min);
    }
}