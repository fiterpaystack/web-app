/** Angular Imports */
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../system.service';

/**
 * Kafka Notifications data source.
 */
export class KafkaNotificationsDataSource implements DataSource<any> {
  /** Kafka Notifications behavior subject to represent loaded kafka notifications page. */
  private kafkaNotificationsSubject = new BehaviorSubject<any[]>([]);
  /** Records behavior subject to represent total number of kafka notifications. */
  private recordsSubject = new BehaviorSubject<number>(0);

  /**
   * @param {SystemService} systemService System Service.
   */
  constructor(private systemService: SystemService) {}

  /**
   * Gets kafka notifications on the basis of provided parameters and emits the value.
   * @param {number} pageIndex Page number.
   * @param {number} limit Number of entries within the page.
   */
  getKafkaNotifications(pageIndex: number = 0, limit: number = 10) {
    this.kafkaNotificationsSubject.next([]);
    this.systemService.getKafkaNotifications(pageIndex * limit, limit).subscribe((kafkaNotifications: any) => {
      this.recordsSubject.next(kafkaNotifications.totalFilteredRecords);
      this.kafkaNotificationsSubject.next(kafkaNotifications.pageItems);
    });
  }

  /**
   * @param {CollectionViewer} collectionViewer
   */
  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.kafkaNotificationsSubject.asObservable();
  }

  /**
   * @param {CollectionViewer} collectionViewer
   */
  disconnect(collectionViewer: CollectionViewer): void {
    this.kafkaNotificationsSubject.complete();
    this.recordsSubject.complete();
  }

  /**
   * @returns {Observable<number>} Total number of records.
   */
  get records$(): Observable<number> {
    return this.recordsSubject.asObservable();
  }
}
