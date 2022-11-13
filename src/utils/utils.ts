export const trimRecordType = (recordType: string): string => {
  if(recordType[recordType.length - 1] === 's'){
    return recordType.slice(0, recordType.length - 1);
  } else {
    return recordType
  }
}
