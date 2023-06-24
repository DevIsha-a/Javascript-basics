let arr1= [1,2,4,5];
let arr2= [6,7,8,9];
let arr3= [5, 4, 3 ,2 ,1];
let arr4= [3, 4 ,2 , 9, 10];
let num = 10;
let num2= 8;


function useIsArray(arr){
    let isArr= Array.isArray(arr)  //checks if it is array or not returns true or false
    console.log(isArr) 
}
// useIsArray([1,23,4])

const usePush=(arr)=>{
    
const newArrLength= arr.push(10,20,40) //pushes elements at the end of the array and returns array length
console.log(newArrLength)
console.log(arr)   //will return prev + new elements
}
// usePush(arr1)

const usePop=(arr)=>{
    console.log(arr.pop()) //receives only 1 value and removes and returns the last element
    console.log(arr)  // now contains all the elements except last item say 5

}
// usePop(arr1)

const useShift = (arr) => {
    arr.unshift(1, 3, 4); // adds new elements at the start of the array
    console.log(arr); // logs the updated array with new elements at the beginning
  };
  
//   useShift(arr1);
  
  const useUnShift = (arr) => {
    const removedElement = arr.shift(); // removes and returns the first element from the array
    console.log(removedElement); // logs the removed element
    console.log(arr); // logs the array without the first element
  };
  
  useUnShift(arr1)

const useConcat=(arr1, arr2, arr3, arr4)=>{
    const contcatedArr=arr1.concat(arr2, arr3, arr4)  // concats rest of the arrays with arr1
    console.log(contcatedArr) 

}
// useConcat(arr1, arr2, arr3, arr4)

const useJoin= (arr)=>{

    console.log(arr.join(''))  //consoles 12345
    console.log(arr.join('.'))  //consoles 1.2.3.4.5
    console.log(arr.join(','))  //consoles 1,2,3,4,5
}
// useJoin(arr1)


const useReverse=(arr)=>{
console.log(arr.reverse())  //returns a reversed array
}
// useReverse(arr1)

const useSort=(arr)=>{  //converts the string and compares UTF-16 seq codes
 
const reversedSArr= arr.sort((a,b)=> a-b)   //[ 2, 3, 4, 9, 10 ]
console.log(reversedSArr)
const forwardSArr= arr.sort((a,b)=> b-a)  //[ 10, 9, 4, 3, 2 ]
console.log(forwardSArr)

}
// useSort(arr4)

const useSplice=(arr)=>{
    arr.splice(0 ,2, 'a', 'b', 'c')//removes 2  elements starting from index 0 to 2, and insert the new elements starting from 0 index 
console.log(arr)   

}
useSplice(arr1)

const useSlice=(arr)=>{
    console.log(arr.slice(0 ,2 ))   //returns 2  elements starting from 0 index to index 2 
    
    }
//  useSlice(arr1)


const useindexOf=(arr)=>{
    console.log(arr.indexOf(1)) // returns index of 1, and returns 0 if element is not found in the array. If same element exists multiple time then, it returns the firs index of the item.

}
// useindexOf(arr1)
const useIncludes=(arr)=>{
    console.log(arr.includes(1)) // returns true if array includes element 1, else false

}
// useIncludes(arr1)
const uselastIndexOf=(arr)=>{
    console.log(arr.lastIndexOf(1)) // returns index of 1, and returns 0 if element is not found in the array. If same element exists multiple time then, it returns the last index of the item.


}
// uselastIndexOf(arr1)
const useMap=(arr)=>{
   console.log( arr.map(item=> {return item}))

}
// useMap(arr1)

const useForEach=(arr)=>{
    console.log(arr.forEach(item=>{ return item}))  // will return undefined because forEach doesn't return anything
    arr.forEach(item=>{
        console.log(item) // will console items one by one as it is a side effect / operation
    })

}

// useForEach(arr1)



// Differnce  between forEach and map function 

// map:
// map is used to iterate over each element in an array and transform/modify each element based on a given callback function.
// It creates a new array with the same length as the original array, containing the results of applying the callback function to each element.
// The original array remains unchanged.
// It is commonly used when you need to transform an array of values into a new array with modified values.


// forEach:
// forEach is used to iterate over each element in an array and perform a specified action or operation on each element.
// It does not create a new array or return any value.
// The callback function provided to forEach can modify the elements of the original array directly.
// It is commonly used for executing a function for its side effects, such as logging, updating external


// Difference between slice and splice 

// slice:
// slice is used to extract a portion of an array and return a new array containing the extracted elements.
// It takes two optional parameters: start and end. 
// start specifies the index at which to begin extraction (inclusive), and end specifies the index at which to end extraction (exclusive).
// e.g., arr.slice(1, 3) extracts and returns elements starting from index 1 and ending at index 3  
// The original array remains unchanged.
// If no parameters are provided, slice will copy the entire array.
// It can be used to create a shallow copy of an array.

// splice:
// splice is used to change the contents of an array by removing or replacing existing elements and/or adding new elements.
// It takes three or more parameters: start, deleteCount, and optional item1, item2, etc.
// start specifies the index at which to start changing the array.
// deleteCount specifies the number of elements to remove from the array.
// The method modifies the original array and returns an array containing the removed elements.
// Additional parameters (item1, item2, etc.) can be provided to insert new elements at the specified start index.

// Difference between shift and unshift
// shift:
// The shift method is used to remove the first element from an array and returns the removed element.
// It modifies the original array by shifting all the remaining elements to a lower index (subtracts one from their indices).
// The length of the array is also updated to reflect the removal of the element.
// This method is useful when you want to remove and retrieve the first element from an array.

// unshift:
// The unshift method is used to add one or more elements to the beginning of an array.
// It modifies the original array by shifting all existing elements to a higher index (adds one to their indices) to make room for the new elements.
// The method returns the new length of the array after adding the elements.
// This method is useful when you want to insert elements at the beginning of an array.


// Difference between shift and pop
// shift is used to remove and retrieve the first element from an array, while pop is used to remove and retrieve the last element from an array.