export type Day = 'Pazartesi'|'Salı'|'Çarşamba'|'Perşembe'|'Cuma';
export type Id = string;
export interface Subject { id:Id; name:string; code:string; weeklyQuota:number; color:string; }
export interface Teacher { id:Id; name:string; code:string; status:string; subjectId:Id|null; weeklyTarget:number; maxPerDay:number; unavailable:string[]; preferFree:string[]; active:boolean; classTeacherOf?:Id; }
export interface ClassGroup { id:Id; name:string; teacherId:Id|null; }
export interface TimeBlock { id:string; label:string; start:string; end:string; }
export interface Assignment { id:Id; classId:Id; day:Day; blockId:string; subjectId:Id|null; teacherId:Id|null; title:string; locked:boolean; protected:boolean; vacancy:boolean; reason?:string; note?:string; }
export interface Settings { protectMondayFirst:boolean; protectSecondAndSixth:boolean; schoolName:string; year:string; }
export interface VersionSnapshot { id:Id; name:string; createdAt:string; assignments:Assignment[]; }
export interface AppData { subjects:Subject[]; teachers:Teacher[]; classes:ClassGroup[]; assignments:Assignment[]; settings:Settings; versions:VersionSnapshot[]; }
