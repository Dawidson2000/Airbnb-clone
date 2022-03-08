import React, { FC } from 'react'

interface ILargeCard {
  img: string,
  title: string,
  description: string,
  buttonText: string,
}

const LargeCard: FC<ILargeCard> = (props) => {
  const {img, title, description, buttonText} = props;
  
  return (
    <div>
      
    </div>
  )
}

export default LargeCard
