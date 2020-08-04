export class LassonWithDetails {
    constructor(public Id:number,
        public Day:number,
        public FromDate:Date,
        public EndDate:Date,
        public ChildId:string,
        public TeacherId:number,
        public StartsAt:Date,
        public GroupId:number,
        public Subject:number,
        public LessonDuration:number,
    
        public FirstName:string,
        public LastName:string,
    
        public GroupName:string,
    
        public SubjectName:string){}
    
}
