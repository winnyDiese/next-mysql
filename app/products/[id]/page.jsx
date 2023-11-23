"use client"

import ListProducts from '@/components/ListProducts';
import { useRouter } from 'next/navigation';


const Page = ({params}) => {
  const router = useRouter()
  // const {id} = router.query
  const {id} = params

  return (
    <div>

      <div>No from database: Nike Blazer Mid '77 Vintage</div>
      <div>
        <img src={''} />
      </div>

      <ListProducts id={id} />

    </div>
  );
}

export default Page;
