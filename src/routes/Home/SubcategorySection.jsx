import React from 'react'
import { CustomCarousel } from '../../components/Carousel/CustomCarousel'
import SubcategoryCards from '../../components/Cards/SubcategoryCards'
import { Box } from '@mui/material'

const SubcategorySection = () => {
  return (
    <Box my={3}>
        <CustomCarousel items={{lg:8,md:6,sm:4,xs:2}}>
        {[0, 1, 2, 3,4,5,6,7,8].map((dt) => (
        <div key={dt}>
          <SubcategoryCards/>
        </div>
      ))}
        </CustomCarousel>
    </Box>
  )
}

export default SubcategorySection