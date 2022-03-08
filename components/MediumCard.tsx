import React, { FC } from 'react'

interface IMediumCard{
  img: string,
  title: string,
}

const MediumCard: FC<IMediumCard> = (props) => {
  const {img, title} = props;

  return (
    <div>
      {title}
    </div>
  )
}

export default MediumCard;
