import logo from './logo.svg';
import './App.css';

function App() {

  // var x=10;
  // {
  //   var x=20;
  // }
  // console.log(x);

  // let x=10;
  // {
  //   let x=20;
  // }
  // console.log(x);

  // const x=10;
  // {
  //   const x=20;
  // }
  // console.log(x);

  // let y=5;
  // y= y + 2;
  // console.log(y);

  // const z=5;
  // z= z + 2;
  // console.log(z);

  // const a;
  // a=50;
  // console.log(a);

  // let b;
  // b=50;
  // console.log(b);

  // let arr =[10,20,30,40,50];
  // arr.map((a ,i) => console.log(a));

  // let intro = () =>{
  //   console.log("Binal Bodar")
  // }
  // intro();

  //array
  // let arr = [10,"Binal",20,30,40,50];
  // console.log(arr[4]);

  //object
  // let obj={
  //   id:10,
  //   age:20,
  //   per:30
  // }
  // console.log(obj.per,obj["id"]);

  //push
  // let arr=[10,"Binal",20,30,40,50];
  // arr.push(99);
  // console.log(arr);
  
  //unShift
  // let arr=[10,"Binal",20,30,40,50];
  // arr.unshift(99);
  // console.log(arr);

  //pop
  // let arr=[10,"Binal",20,30,40,50];
  // arr.pop();
  // console.log(arr);

  //shift
  // let arr=[10,"Binal",20,30,40,50];
  // arr.shift();
  // console.log(arr);

  //splice
  // let arr=[10,"Binal",20,30,40,50];
  // arr.splice(3,0,99);//Add element at specific position
  // console.log(arr);

  //splice
  // let arr=[10,"Binal",20,30,40,50];
  // arr .splice(2,1);
  // console.log(arr);

  //ToString
  // let arr=[10,"Binal",20,30,40,50];
  // console.log(arr.toString());

  //some
  // let arr=[10,"Binal",20,30,40,50];
  // let res=arr.some((a)=>a>100)//10
  // console.log(res);

  //find
  // let arr=[10,"Binal",20,30,40,50];
  // let res=arr.find((a)=>a>10);
  // console.log(res);

  //isArray
  // let arr=10;
  //let arr=[10,"Binal",20,30,40,50];
  //let res=Array.isArray(arr);
  //console.log(res);

  //map
  // let array =[
  //   {id:101, name:"abacavir", quantity:25, price:150, expiry:2022, status:true},
  //   {id:102, name:"Eltrombopag", quantity:90, price:550, expiry:2021, status:true},
  //   {id:103, name:"Meloxicam", quantity:85, price:450, expiry:2025, status:false},
  //   {id:104, name:"Allopurinol", quantity:50, price:600, expiry:2023, status:true},
  //   {id:105, name:"Phenytoin", quantity:63, price:250, expiry:2021, status:false}
  // ];
  // let map=array.map(x => console.log(x.id, x.name, x.quantity, x.price, x.expiry, x.status));

  //filter
  // function xdate(expiry){
  //   return expiry > 2022;
  // }
  // function func(){
  //   var filtered=[2022,2021,2025,2023,2021].filter(xdate);
  //   console.log(filtered);
  // }
  // func();

  //reduse
  // let array1=[150,550,450,600,250];
  // let ini=0;
  // let sum=array1.reduce(
  //   (pre,cur)=>pre+cur,
  //   ini
  // );
  // console.log(sum);


  //map Employee
  // let array =[
  //   {name: "amit", age: 35, salary: 40000, bonus: 1000, status:true},
  //   {name: "ajay", age: 25, salary: 38000, bonus: 2000, status:false},
  //   {name: "mayur", age: 23, salary: 50000, bonus: 500, status:true},
  //   {name: "jay", age: 29, salary: 35000, bonus: 600, status:true},
  //   {name: "raj",  age: 33, salary: 22000, bonus: 2000, status:true}
  // ];
  // let map=array.map(x => console.log(x.name, x.age, x.salary, x.bonus, x.status));

  //filter Employee
  // function xdate(salary){
  //   return salary > 5000;
  // }
  // function func(){
  //   var filtered=[4000,38000,5000,35000,22000].filter(xdate);
  //   console.log(filtered);
  // }
  // func();

  //reduse Employee
  // let array1=[4000,38000,5000,35000,22000];//salary
  // let array1=[1000,2000,500,600,2000];//bonus
  // let ini=0;
  // let sum=array1.reduce(
  //   (pre,cur)=>pre+cur,
  //   ini
  // );
  // console.log(sum);

  const data = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];

  //map
  data.map((value, index) => console.log(value.id, value.name));

  //filter
  let filterData = data.filter((d, i) => d.expiry >=2022);
  console.log(filterData);

  //reduce
  let ans = filterData.reduce((acc, d, i)=>acc+d.price,0);
  console.log(ans);

  //filter&reduce
  let abc=data
  .filter((d, i)=>d.expiry>=2022)
  .reduce((acc, d, i)=>acc+d.price,0);
  console.log(abc);

  return (
    <>
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>quantity</th>
        <th>price</th>
        <th>expiry</th>
        <th>total</th>
        <th rowspan="5">1200</th>
      </tr>
      {
        data.map((value, index)=>{
          return(
            <tr>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.quantity}</td>
              <td>{value.price}</td>
              <td>{value.expiry}</td>
            </tr>
          )
        })
      }
    </table>
    </>
  );
}

export default App;
