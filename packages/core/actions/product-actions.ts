'use server'

import { customFetch } from "./api-action";



const BASE_URL = 'http://localhost:8085'

interface FetchProductProps {
  locale: string;
  sortCode: string;
  offset: number;
  categoryIds : string[];
  query: string,
  limit: number,
  searchText: string,
  attributeQuery: string[]
}

interface ReviewData {
  id: string;
  headline: string;
  comment: string;
  rating: number;
}
export async function fetchProducts({ 
locale,
offset = 0,
sortCode = '',
categoryIds = [],
limit  ,
searchText = '',
attributeQuery = []
}: FetchProductProps): Promise<any> {

const params :any = new URLSearchParams();

params.append('limit', limit);
if (sortCode) params.append('sort', sortCode);
if (offset) params.append('offset', offset);
if (categoryIds) {
  categoryIds.forEach(id => params.append('categoryIds', id));
}
if (searchText) params.append('searchText', searchText);
if (attributeQuery) {
  attributeQuery.forEach(id => params.append('attributeFilters', id));
}
const baseurl = `${BASE_URL}/products?${params.toString()}`;


try {
  const productSearchPage = await customFetch(baseurl, locale, { method: "GET" });
  const { data }: any = productSearchPage;
  return data;
} catch (error) {
  console.error("Failed to fetch products:", error);
  throw error;
}
}

export async function getProductCategory({
  locale,
}): Promise<any>{
  const baseurl = `${BASE_URL}/categories`

  const productSearchPage = await customFetch(baseurl , locale)
  const  { data :  { data }} : any = productSearchPage
  return  data
} 


export async function getProductDetails({
  locale,
  slug
}): Promise<any>{
  const baseurl = `${BASE_URL}/product/key/${slug}`

  const productDetails = await customFetch(baseurl , locale)
  const { data  : { data } }  : any= productDetails
  
  
  return data
} 

export async function getProductAttributes({
  locale,
}): Promise<any>{
  const baseurl = `${BASE_URL}/attributes`

  const productSearchPage = await customFetch(baseurl , locale)
  const  { data :  { results }} : any = productSearchPage
  return  results
} 


export async function addReview({
  id,
  headline,
  comment,
  rating
} : ReviewData): Promise<any>{
  const baseurl = `${BASE_URL}/add/reviews`
  let data = { id, headline , comment, rating}

  const response = await fetch(baseurl, {
    headers: {
      'Content-Type': 'application/json',
    },
    method : "POST" , body : JSON.stringify(data)
  });
  
  return  true
} 



export async function getProductReviews({
 id
}): Promise<any>{
 
  const baseurl = `${BASE_URL}/reviews/${id}`

  const review = await customFetch(baseurl , null)
  const { data } : any = review ?? {}
  return data?.results
} 