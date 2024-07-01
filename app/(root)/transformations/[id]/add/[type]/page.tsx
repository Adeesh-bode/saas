import Header from '@/components/shared/Header';
import { transformationTypes } from '@/constants';
import React from 'react'

const AddTransformationTypePage = ({params:{ type} } : SearchParamProps ) => { // params se type by  destructuring
  const tranformation = transformationTypes[type]; // is a js object with types as key attribute
  
  // export const transformationTypes = {
  //   restore: {
  //     type: "restore",
  //     title: "Restore Image",
  //     subTitle: "Refine images by removing noise and imperfections",
  //     config: { restore: true },
  //     icon: "image.svg",
  //   },

  return (
    <div>
      <Header 
        title={ tranformation.title  }
        subtitle= { tranformation.subTitle }
      />
    </div>
  )
}

export default AddTransformationTypePage;