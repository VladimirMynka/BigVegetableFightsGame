export class Util {
    public static async sleep(ms: number): Promise<unknown> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms)
        });
    }

    public static randomInt(min = 0, max = 100): number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    public static getFormatCurrentTime(): string {
        let date = new Date();
        return `[${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}]`;
    }

    public static async fireworks() {
        let $fireworks = $('.fireworks');
        for (let i = 0; i < 5; i++) {
            $fireworks.removeClass('d-none');
            $fireworks.offset({ left: Util.randomInt(0, 500), top: Util.randomInt(0, 500) })
            await Util.sleep(500);
            $fireworks.addClass('d-none')
            await Util.sleep(100);
        }
    }
}