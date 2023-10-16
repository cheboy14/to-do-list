"use client"

import { DataTable } from './components/data-table'
import { columns } from './components/column'
import { Button } from '@/components/ui/button'
import { payments } from './components/payment'
import { useRouter } from 'next/navigation'

export default function Home() {

  const payment=payments
  const router=useRouter();

  const onSubmit=()=>{
    router.push(`/create`)
    
  }


  return (
    <div className="container mx-auto py-10">
      <div className='items-end  justify-end pb-5'>
        <Button  onClick={onSubmit}>Create New Todo</Button>

      </div>
    <DataTable columns={columns} data={payment} />
  </div>
  
  )
}
