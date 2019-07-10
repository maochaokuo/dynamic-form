export class TablegridColumn {
  columnKey: string;
  columnTitle: string;
  columnWidth: string;
  columnAlign: string; // left center right
  columnVisible: boolean;
  columnType: string; // text or checkbox or others
  columnWrap: boolean;
  options: {key: string, value: string}[] = [];
  constructor(options: {
      columnKey?: string;
      columnTitle?: string;
      columnWidth?: string;
      columnAlign?: string;
      columnVisible?: boolean;
      columnType?: string;
      columnWrap?: boolean;
    } = {}) {
    this.columnKey = options.columnKey || '';
    this.columnTitle = options.columnTitle || '';
    this.columnWidth = options.columnWidth || '';
    this.columnAlign = options.columnAlign || '';
    this.columnVisible = !!options.columnVisible ;
    this.columnType = options.columnType || '';
    this.columnWrap = !!options.columnWrap ;
  }
}
