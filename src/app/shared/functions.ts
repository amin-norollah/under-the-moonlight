export class Functions {
  public static mapData(
    value: number,
    lowerLimit: number,
    upperLimit: number
  ): number {
    return (upperLimit - lowerLimit) * value + lowerLimit;
  }

  public static gradientTransition(
    source: string,
    destination: string
  ): string {
    const [sr, sb, sg] = this.hexToRgb(source);
    const [dr, db, dg] = this.hexToRgb(destination);

    const rr = sr == dr ? sr : sr < dr ? sr + 1 : sr - 1;
    const rg = sg == dg ? sg : sg < dg ? sg + 1 : sg - 1;
    const rb = sb == db ? sb : sb < db ? sb + 1 : sb - 1;

    // console.log('rr' + rr);
    // console.log('rg' + rg);
    // console.log('rb' + rb);

    // console.log('sr' + sr);
    // console.log('sg' + sg);
    // console.log('sb' + sb);

    console.log('this.rgbToHex(rr, rg, rb)  ' + this.rgbToHex(rr, rg, rb));
    console.log('destination' + destination);

    return this.rgbToHex(rr, rg, rb);
  }

  public static hexToRgb(hex: string): [number, number, number] {
    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
    }
    return [0, 0, 0];
  }

  public static rgbToHex(r: number, g: number, b: number) {
    return (
      '#' +
      this.componentToHex(r) +
      this.componentToHex(g) +
      this.componentToHex(b)
    );
  }

  public static componentToHex(c: number): string {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }
}
