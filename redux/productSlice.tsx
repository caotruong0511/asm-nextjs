
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { add, get, getAll, remove, update } from '../api-client/productApi';
import {Product} from '../models/product'
// type ProductState={
//     products:Product[];
//     product:Product[] | {};
// }
// const initialState:ProductState = {
//     products:[],
//     product:{}
// }
type UserState = {
    products: Product[];
    product: Product | {};
  };
  
  const initialState: UserState = {
    products: [],
    product: {},
  };
  

export const getproduct = createAsyncThunk("product/getproduct",async()=>{
    const response = await getAll()
    return response
})
export const removeproduct = createAsyncThunk("product/removeproduct",async(id:string)=>{
    const response = await remove(id)
    return response
})
export const addProduct = createAsyncThunk("product/addProduct", async (product: any) => {
    const res = await add(product);
  
    return res;
  });

  export const getone= createAsyncThunk("product/getone",async(id:any)=>{
    const res = await get(id)
    return res
  })
  export const updateproduct= createAsyncThunk("product/updateproduct",async(product:any)=>{
    const res = await update(product)
    return res
  })

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(build)=>{
        build.addCase(getproduct.fulfilled,(state,{payload})=>{
        state.products=payload||[]
        }),
        build.addCase(removeproduct.fulfilled,(state,{payload})=>{
            state.products= state.products.filter((item) => item._id !== payload?._id)
        }),
        build.addCase(addProduct.fulfilled,(state,{payload})=>{
            state.products.push(payload as Product)
        }),
        build.addCase(getone.fulfilled,(state,{payload})=>{
            state.product= payload as Product;
        }),
        build.addCase(updateproduct.fulfilled,(state,{payload})=>{
            state.products=state.products=state.products.map((item)=>(item._id === payload?._id ? payload :item)) as Product[]
         })
        // builder.addCase(getUser.fulfilled, (state, { payload }) => {
        //     state.user = payload as User;
        //   });
      
        //   builder.addCase(updateUser.fulfilled, (state, { payload }) => {
        //     state.users = state.users = state.users.map((item) => (item._id === payload?._id ? payload : item)) as User[];
        //   });
        
    }
})
export default productSlice.reducer