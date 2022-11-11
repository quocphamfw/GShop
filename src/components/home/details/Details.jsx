import React, { useEffect, useState } from "react";
import { MdStarRate } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { ADD, DELETE, REMOVE_INT } from "../../../controller/action";

export const Details = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  //console.log(id)

  const getdata = useSelector((state) => state.cartReducer.carts);
  //console.log(getdata)

  const compare = () => {
    let compareData = getdata.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, [id]);

  // delete item
  const history = useNavigate();
  const deletes = (id) => {
    dispatch(DELETE(id));
    history.push("/");
  };

  // increment item
  const dispatch = useDispatch();
  const increment = (e) => {
    dispatch(ADD(e));
  };

  // descriment item
  const decrement = (item) => {
    dispatch(REMOVE_INT(item));
  };

  return (
    <>
      <article>
        <section className="details">
          <h2 className="details_title">Product Details Pages</h2>
          {data.map((item) => (
            <div className="details_content">
              <div className="details_content_img">
                <img src={item.cover} alt="" />
              </div>
              <div className="details_content_detail">
                <h1>{item.title}</h1>
                <div className="rating">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <label htmlFor=""> (14 customer review)</label>
                </div>
                <h3> ${item.price * item.qty}</h3>
                <p>{item.author}</p>
                <div className="qty">
                  <div className="count">
                    <button
                      onClick={
                        item.qty <= 1
                          ? () => deletes(item.id)
                          : () => decrement(item)
                      }
                    >
                      <AiOutlineMinus />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => increment(item)}>
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <button className="button">Add To Cart</button>
                </div>
                <div className="desc">
                  <h4>PRODUCTS DESCRIPTION</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec augue libero, ultricies sit amet faucibus vel, mattis
                    vel urna. Sed volutpat id nulla ut tempus. Curabitur
                    vehicula tortor justo, convallis dignissim dolor tincidunt
                    at. Curabitur ultricies libero non lectus venenatis, et
                    varius ipsum hendrerit. Pellentesque tempus convallis
                    aliquet.
                  </p>
                  <h4> PRODUCT DETAILS</h4>
                  <ul>
                    <li>
                      <p>Nam ultrices nec nunc sed dapibus.</p>
                    </li>
                    <li>
                      <p>
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus
                      </p>
                    </li>
                    <li>
                      <p>Proin aliquam et tellus non tempor.</p>
                    </li>
                    <li>
                      <p>Morbi volutpat sem id mauris vehicula hendrerit.</p>
                    </li>
                    <li>
                      <p>Maecenas sodales venenatis risus nec facilisis.</p>
                    </li>
                    <li>
                      <p>Integer vulputate sem nec felis iaculis viverra.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>
      </article>
    </>
  );
};
