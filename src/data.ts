import type { AppData, Day, TimeBlock, Teacher } from './types';
export const DAYS: Day[]=['Pazartesi','Salı','Çarşamba','Perşembe','Cuma'];
export const BLOCKS: TimeBlock[]=[
 {id:'1',label:'1. Ders',start:'08:30',end:'09:10'},{id:'2',label:'2. Ders',start:'09:20',end:'10:00'},
 {id:'3',label:'3. Ders',start:'10:15',end:'10:55'},{id:'4',label:'4. Ders',start:'11:05',end:'11:45'},
 {id:'5',label:'5. Ders',start:'12:00',end:'12:40'},{id:'6',label:'6. Ders',start:'12:45',end:'13:15'}];
const uid=()=>crypto.randomUUID();
export function initialData():AppData{
 const subjects=[
  {id:'eng',name:'İngilizce',code:'ING',weeklyQuota:10,color:'#e8f2ff'},
  {id:'music',name:'Müzik',code:'MUZ',weeklyQuota:10,color:'#f6edff'},
  {id:'creative',name:'Müzik + Yaratıcı Etkinlikler',code:'MYE',weeklyQuota:8,color:'#fff0e7'},
  {id:'pe',name:'Beden Eğitimi',code:'BED',weeklyQuota:10,color:'#e7f7ee'},
  {id:'art',name:'Resim / Görsel Sanatlar',code:'RES',weeklyQuota:10,color:'#fff6d9'},
  {id:'branch',name:'Branş Dersi',code:'BR',weeklyQuota:8,color:'#eef0f4'}
 ];
 const classes=['Kaplumbağalar','Civcivler','Tavşanlar','Arılar','Uğurböcekleri','Papatyalar','Laleler','Kelebekler','Balıklar','Sincaplar'].map((name,i)=>({id:`c${i+1}`,name,teacherId:`t${i+1}`}));
 const classTeachers=['Pınar Piro','İmge Tezel','Nalan Ümitsel','Özge Kaya','Açık Kadro','Şelale Murat','Fetine Kuyucu','Makbule Erdoğan','Sedef Yıkıcı','Fatmanur Melgeşek'];
 const teachers:Teacher[]=classTeachers.filter(x=>x!=='Açık Kadro').map((name,i)=>({id:`t${i+1}`,name,code:`S${i+1}`,status:i===6?'Kıdem A':'Muvazzaf',subjectId:null,weeklyTarget:i===6?17:22,maxPerDay:6,unavailable:[],preferFree:[],active:true,classTeacherOf:classes[i]?.id}));
 teachers.push(
  {id:'b1',name:'Eda Çakır Balkay',code:'ING1',status:'Branş',subjectId:'eng',weeklyTarget:10,maxPerDay:4,unavailable:[],preferFree:[],active:true},
  {id:'b2',name:'Yeşim Çağıner',code:'MUZ1',status:'Branş',subjectId:'music',weeklyTarget:10,maxPerDay:4,unavailable:[],preferFree:[],active:true},
  {id:'b3',name:'İrem Beyaz',code:'BED1',status:'Branş',subjectId:'pe',weeklyTarget:10,maxPerDay:4,unavailable:[],preferFree:[],active:true},
  {id:'b4',name:'Şahinde Arslan',code:'RES1',status:'Branş',subjectId:'art',weeklyTarget:10,maxPerDay:4,unavailable:[],preferFree:[],active:true},
  {id:'b5',name:'Cavidan Yağız',code:'BR1',status:'Branş',subjectId:'branch',weeklyTarget:8,maxPerDay:4,unavailable:[],preferFree:[],active:true}
 );
 const assignments=[] as AppData['assignments'];
 for(const c of classes){
  for(const day of DAYS){
   for(const b of BLOCKS){
    const mondayFirst=day==='Pazartesi'&&b.id==='1';
    assignments.push({id:uid(),classId:c.id,day,blockId:b.id,subjectId:null,teacherId:c.teacherId,title:mondayFirst?'Güne Başlama & Çember Zamanı':b.id==='6'?'Günü Değerlendirme':b.id==='2'?'Sınıf İçi Etkinlik / Oyun':'Sınıf İçi Etkinlik',locked:mondayFirst,protected:mondayFirst||b.id==='2'||b.id==='6',vacancy:!c.teacherId});
   }
  }
 }
 const branchPlan:[string,Day,string,string,string][]=[
  ['c1','Salı','4','pe','b3'],['c1','Perşembe','5','music','b2'],['c2','Çarşamba','3','pe','b3'],['c3','Salı','5','eng','b1'],['c4','Perşembe','3','art','b4'],['c5','Çarşamba','4','music','b2'],['c6','Cuma','3','pe','b3'],['c7','Salı','3','eng','b1'],['c7','Perşembe','4','branch','b5'],['c8','Cuma','4','eng','b1'],['c9','Salı','4','music','b2'],['c9','Perşembe','3','art','b4'],['c10','Çarşamba','5','eng','b1']
 ];
 for(const [cid,day,bid,sid,tid] of branchPlan){const a=assignments.find(x=>x.classId===cid&&x.day===day&&x.blockId===bid); if(a){a.subjectId=sid;a.teacherId=tid;a.title=subjects.find(s=>s.id===sid)?.name||'Branş Dersi';}}
 return {subjects,teachers,classes,assignments,settings:{protectMondayFirst:true,protectSecondAndSixth:true,schoolName:'GİRNE MAARİF ANAOKULU',year:'2026–2027'},versions:[]};
}
