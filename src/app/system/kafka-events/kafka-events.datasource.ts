/** Angular Imports */
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../system.service';

/**
 * Kafka Events data source.
 */
export class KafkaEventsDataSource implements DataSource<any> {
  /** Kafka Events behavior subject to represent loaded kafka events page. */
  private kafkaEventsSubject = new BehaviorSubject<any[]>([]);
  /** Records behavior subject to represent total number of kafka events. */
  private recordsSubject = new BehaviorSubject<number>(0);

  /**
   * @param {SystemService} systemService System Service.
   */
  constructor(private systemService: SystemService) {}

  /**
   * Gets kafka events on the basis of provided parameters and emits the value.
   * @param {number} pageIndex Page number.
   * @param {number} limit Number of entries within the page.
   * @param {string} status Optional status filter (PENDING, SENT, FAILED, DLQ).
   * @param {string} sort Optional sort criteria (e.g., "createdAt,desc").
   */
  getKafkaEvents(pageIndex: number = 0, limit: number = 10, status?: string, sort?: string) {
    this.kafkaEventsSubject.next([]);
    const offset = pageIndex * limit;
    this.systemService.getKafkaEvents(offset, limit, status, sort).subscribe((response: any) => {
      // API returns Spring Data Page format:
      // { content: [...], totalElements: number, totalPages: number, ... }
      this.recordsSubject.next(response.totalElements || 0);
      this.kafkaEventsSubject.next(response.content || []);
    });
  }

  /**
   * @param {CollectionViewer} collectionViewer
   */
  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.kafkaEventsSubject.asObservable();
  }

  /**
   * @param {CollectionViewer} collectionViewer
   */
  disconnect(collectionViewer: CollectionViewer): void {
    this.kafkaEventsSubject.complete();
    this.recordsSubject.complete();
  }

  /**
   * @returns {Observable<number>} Total number of records.
   */
  get records$(): Observable<number> {
    return this.recordsSubject.asObservable();
  }
}
