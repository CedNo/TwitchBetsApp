export function formatNumber(num : number, digits : number) {

    const values = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];

    const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
    const item = values.findLast(item => num >= item.value);

    if(item?.value == 1e3) return num.toLocaleString();

    return item ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : "0";
}