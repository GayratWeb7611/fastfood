import { Avatar, Card } from "antd";
import React from "react";
import styles  from '../../styles/card_container.module.scss'
import AddToCard from "./assist/add_to_cart";
import MoreDesc from "./assist/more_description";
const { Meta } = Card;
const MyCard = ({product})=>{
    
    return<>
            {
        <div className={styles.card}>

        <Card   cover={
                  <div
                    style={{
                      height: '250px',
                      position: 'relative',
                      display: 'grid',
                      overflow: 'hidden',
                      placeItems: 'center',
                      borderTopRightRadius: '10px',
                      borderTopLeftRadius: '10px'
                    }}>
                    <img
                  alt={product.src[0]?.name}
                  src={product.src[0]?.url}
                      style={{
                        width: '100%',
                        minHeight: '100%',
                        position: 'absolute',
                      }}
                    />
          </div> }
                        actions={[
                        <MoreDesc key="moreLearn" product={product} />,
                        <AddToCard  key="addcard" product={product} />,
                            ]}
  >
    <Meta
      title={product.title}
      description={product.description}
    />
  </Card>

        </div>
}
    </>
}

export default MyCard