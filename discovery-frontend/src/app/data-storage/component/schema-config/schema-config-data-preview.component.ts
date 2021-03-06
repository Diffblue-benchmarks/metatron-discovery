import {AbstractComponent} from "../../../common/component/abstract.component";
import {Component, ElementRef, Injector, Input} from "@angular/core";
import {ConnectionType, Field} from "../../../domain/datasource/datasource";

@Component({
  selector: 'schema-config-data-preview',
  templateUrl: 'schema-config-data-preview.component.html'
})
export class SchemaConfigDataPreviewComponent extends AbstractComponent {

  @Input()
  public readonly connType: ConnectionType;

  public dataList: string[];
  public previewMessage: string;
  public isShowPreview: boolean;

  constructor(protected element: ElementRef,
              protected injector: Injector) {
    super(element, injector);
  }

  /**
   * Init
   * @param {Field} field
   * @param {string[]} dataList
   */
  public init(field: Field, dataList: string[]) {
    // set data list
    this.dataList = dataList;
    // set data list show flag
    if (field.derived && field.derivationRule.type === 'user_defined') {
      this.previewMessage = this.translateService.instant('msg.storage.ui.config.extension.no.data');
      this.isShowPreview = false;
    } else if (field.derived && this.connType === ConnectionType.LINK) {
      this.previewMessage = this.translateService.instant('msg.storage.ui.config.linked-geo.no.data');
      this.isShowPreview = false;
    } else if (!dataList || dataList.length === 0) {
      this.previewMessage = this.translateService.instant('msg.storage.ui.config.no.data');
      this.isShowPreview = false;
    } else {
      this.isShowPreview = true;
    }
  }
}
