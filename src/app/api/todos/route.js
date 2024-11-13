
let todos=[
    {
        id:1,
        todo:'Todo 1',
        isCompleted:false
    },
    {
        id:2,
        todo:'Todo 2',
        isCompleted:false
    },
    {
        id:3,
        todo:'Todo 3',
        isCompleted:false
    },
    {
        id:4,
        todo:'Todo 4',
        isCompleted:false
    },
    {
        id:5,
        todo:'Todo 5',
        isCompleted:false
    },
]
export async function GET(request) {
   return Response.json({
    todo:todos,
    msg:'todo Fetch Successfully'
    })
}
export async function POST(request) {
    let data=await request.json()
    console.log('Data From Frontend To Backend=>',data);
    return Response.json({
     todo:todos,
     msg:'todo Added Successfully'
     })
 }