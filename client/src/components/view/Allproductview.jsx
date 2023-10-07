import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Allproductview() {
  const [product, setProduct] = useState([])
  const [filterproduct, setFilterProduct] = useState([])
  const [typeproduct, settypeProduct] = useState([])
  console.log(typeproduct);
  useEffect(() => {
    axios.get('https://product-backend-h7jp.onrender.com/product/view-product').then((response) => {

      setProduct(response.data.details)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  const [subcategory, setSubcategory] = useState([])
  console.log(subcategory);
  useEffect(() => {
    axios.get('https://product-backend-h7jp.onrender.com/subcategory/view-subcategory').then((response) => {

      setSubcategory(response.data.details)
    }).catch((err) => {
      console.log(err);
    })
  }, [])


  const category = (id) => {
    axios.get(`https://product-backend-h7jp.onrender.com/product/view-product/${id}`).then((response) => {

      setFilterProduct(response.data.details)
    }).catch((err) => {
      console.log(err);
    })
  }
  const types = (id) => {
    axios.get(`https://product-backend-h7jp.onrender.com/product/view-product-type/${id}`).then((response) => {

      settypeProduct(response.data.details)
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <div className="container1">
        <div style={{ textDecoration: 'none', fontFamily: "serif" }}>
          ELECTRONICS {product.length}
        </div>
        <div className="card row">

          <div className="col-lg-3 card-body" style={{ display: 'flex' }}>
            {subcategory.map((data, key) => (
              <li style={{ listStyle: 'none', marginRight: '100px' }}> <a onClick={() => { category(data._id) }} style={{ textDecoration: 'none', padding: '50px', color: 'black',fontFamily:'serif' }}>{data.Subcategory}</a></li>
            ))}
            {/* <li style={{ listStyle: 'none', marginRight:'100px' }}> <a href="#" style= {{ textDecoration: 'none' , padding:'50px',color:'black'}}>TV</a></li>
            <li style={{ listStyle: 'none' , marginRight:'100px'}}> <a href="#" style= {{ textDecoration: 'none' , padding:'50px',color:'black'}}>LAPTOP</a></li> */}

          </div>


        </div>

        <div className="text"> Products </div>
        <div className='row'>

          {filterproduct[0] ?

            filterproduct[0].type === 'ios' || filterproduct[0].type === 'android' ?

              (
                <>
                  <div className="col-lg-12 card-body" style={{ display: 'flex' }}>


                    <li style={{ listStyle: 'none', marginRight: '100px' }}> <a onClick={() => { types('android') }} style={{ textDecoration: 'none', padding: '50px', color: 'black' }}>Android</a></li>
                    <li style={{ listStyle: 'none', marginRight: '100px' }}> <a onClick={() => { types('ios') }} style={{ textDecoration: 'none', padding: '50px', color: 'black' }}>IOS</a></li>

                  </div>
                  <>
                    {typeproduct[0] ?
                      <>
                        {typeproduct.map((data, key) => (

                          <div className='col-lg-3'>

                            <div className="card"  >
                              <img   className="card-img-top"
                              src={`/upload/${data.image}`}
                              alt="..." />
                              <div className="card-body">

                                <p className="card-text"style={{ textDecoration: 'none', fontFamily: "serif" }}>
                                  Product Name:{data.productname}<br />
                                  Product type:{data.type}<br />
                                  Product Details:{data.details}<br />
                                </p>

                              </div>
                            </div>
                          </div>

                        ))}
                      </>
                      :
                      (
                        <>
                          {filterproduct.map((data, key) => (

                            <div className='col-lg-3'>

                              <div className="card"  >
                                <img   className="card-img-top"
                                src={`/upload/${data.image}`} alt="..." />
                                <div className="card-body">

                                  <p className="card-text">
                                    Product Name:{data.productname}<br />
                                    Product type:{data.type}<br />
                                    Product Details:{data.details}<br />
                                  </p>

                                </div>
                              </div>
                            </div>
                          ))}
                        </>)

                    }


                  </>
                </>

              )


              :

              filterproduct.map((data, key) => (

                <div className='col-lg-3'>

                  <div className="card"  >
                    <img  className="card-img-top"
                    src={`/upload/${data.image}`} alt="..." />
                    <div className="card-body">

                      <p className="card-text">
                        Product Name:{data.productname}<br />
                        Product type:{data.type}<br />
                        Product Details:{data.details}<br />
                      </p>

                    </div>
                  </div>
                </div>
              ))

            :



            product.map((data, key) => (

              <div className='col-lg-3 '>

                <div className="card"  >
                  <img   className="card-img-top"
                  src={`/upload/${data.image}`}
                  alt="..." />
                  <div className="card-body">

                    <p className="card-text" style={{textDecoration:'non',fontFamily:'serif'}}>
                      Product Name:{data.productname}<br />
                      Product type:{data.type}<br />
                      Product Details:{data.details}<br />
                    </p>

                  </div>
                </div>
              </div>
            ))


          }




        </div>

      </div>

    </ >
  )
}
