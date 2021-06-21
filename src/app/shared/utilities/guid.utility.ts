import { Guid } from 'guid-typescript';
export class GuidUtility {
    createGuid() {
        return Guid.create();
    }
}