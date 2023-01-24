import React from "react";
import aa from "../componets/Section.module.css";
import { Link } from "react-router-dom";
import atalyk from "../img/atalyk1.png";
import korova from "../img/Ellipse7.png";
import lines from "../img/line.png";
import fot from "../img/pngegg-img.png";
import img from "../img/Ellipse 8.png";
import img_1 from "../img/log-in-svgrepo-com 1.png";
import img_3 from "../img/cow_img.png";
import img_4 from "../img/Line 3.png";
import img_5 from "../img/Kyrgyzstan 1.png";
import img_6 from "../img/Line 4.png";
import img_7 from "../img/gen.png";
import img_8 from "../img/Rectangle 5.png";
import arow from "../img/arrowleft2.png";
import img_9 from "../img/cow_bac.png";
import cow_2 from "../img/cow_2.png";
import img_doc from "../img/document_img.png";
import out from "../img/out.png";
const Section = () => {
  return (
    <div className={aa.body_menus}>
      <div className={aa.blok_1}>
        <div className={aa.blok_1_1}>
          {/* img */}
          <div className={aa.img_colum}>
            <div>
              <img className={aa.atalyk} src={atalyk} alt="" />
            </div>

            <div className={aa.lis}>
              <img src={img_1} alt="" />
            </div>
          </div>

          {/* button */}
          <div className={aa.button_colum}>
            <div className={aa.btn_pogogolov}>
              <Link to="/Matochnoe">
                <button className={aa.bb}>
                  <div className={aa.btn_dosher}>
                    <img src={img_3} alt="" />
                    <img src={img_4} alt="" />
                    <p> маточное поголовье</p>
                  </div>
                </button>
              </Link>
            </div>

            <div className={aa.btn_pogogolov}>
              <Link to="/Machen">
                <button className={aa.bb}>
                  <div className={aa.btn_dosher}>
                    <img src={img_3} alt="" />
                    <img src={img_4} alt="" />
                    <p> БЫКИ (СОБСТВЕННЫЕ)</p>
                  </div>
                </button>
              </Link>
            </div>

            <div className={aa.btn_pogogolov}>
              <Link to="/Bullsown">
                <button className={aa.bb}>
                  <div className={aa.btn_dosher}>
                    <img src={img_3} alt="" />
                    <img src={img_4} alt="" />
                    <p> быки (иностранные)</p>
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className={aa.liss}>
            {" "}
            <hr />
          </div>

          <div className={aa.button_colum}>
            <div className={aa.btn_pogogolov}>
              <Link to="">
                <button className={aa.bb}>
                  <div className={aa.btn_dosher}>
                    <img src={img_7} alt="" />
                    <img src={img_4} alt="" />
                    <p> Анализировать №1</p>
                  </div>
                </button>
              </Link>
            </div>

            <div className={aa.btn_pogogolov}>
              <button className={aa.bb}>
                <div className={aa.btn_dosher}>
                  <img src={img_7} alt="" />
                  <div>
                    <img src={img_4} alt="" />
                  </div>
                  <div>
                    {" "}
                    <p> Анализировать №2 </p>
                  </div>
                </div>
              </button>
            </div>

            <div className={aa.btn_pogogolov}>
              <button className={aa.bb}>
                <div className={aa.btn_dosher}>
                  <img src={img_7} alt="" />
                  <img src={img_4} alt="" />
                  <p> Анализировать №3</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className={aa.exit}>
          <Link to="/">
            <button className={aa.btn_exit}>
              <span>Выход</span>
            </button>
          </Link>
        </div>
      </div>

      {/* блок_2 */}
      <div className={aa.blok_2}>
        <div className={aa.blok_2_dis}>
          <div>
            <h3>МИНИСТЕРСТВО СЕЛЬСКОГО ХОЗЯЙСТВА КЫРГЫЗСКОЙ РЕСПУБЛИКИ</h3>
          </div>

          <div>
            <img src={img_5} alt="" />
          </div>

          <div>
            <h3>МИНИСТЕРСТВО СЕЛЬСКОГО ХОЗЯЙСТВА КЫРГЫЗСКОЙ РЕСПУБЛИКИ</h3>
          </div>
        </div>

        <div className={aa.line_blok_2}>
          <img src={img_8} alt="" />
        </div>

        <section className={aa.bac_cow}>
          <div className={aa.cow_img_2}>
            <div>
              <h1>Племенной учет животных</h1>
            </div>
            <div className={aa.cow_im}>
              <img src={cow_2} alt="" />
            </div>
          </div>
        </section>

        <div className={aa.div_footer_noe}>
          <div className={aa.div_width}></div>

          <footer className={aa.fot}>
            <div className={aa.fot_div}>
              <div className={aa.flex}>
                {/* 1 */}
                <div className={aa.fot_div_1}>
                  <div className={aa.report_1}>
                    <button>
                      <img src={img_doc} alt="" />
                      <img src={img_4} alt="" />
                      <p>Отчет 1</p>
                    </button>
                  </div>

                  <div className={aa.report_1}>
                    <button>
                      <img src={img_doc} alt="" />
                      <img src={img_4} alt="" />
                      <p>Отчет 2</p>
                    </button>
                  </div>

                  <div className={aa.report_1}>
                    <button>
                      <img src={img_doc} alt="" />
                      <img src={img_4} alt="" />
                      <p>Отчет 3</p>
                    </button>
                  </div>

                  <div className={aa.report_1}>
                    <button>
                      <img src={img_doc} alt="" />
                      <img src={img_4} alt="" />
                      <p>Отчет 4</p>
                    </button>
                  </div>
                </div>
                {/* 2 */}
                <div className={aa.fot_div_1}>
                  <div className={aa.report_1}>
                    <button>
                      <img src={img_doc} alt="" />
                      <img src={img_4} alt="" />
                      <p>Отчет 5</p>
                    </button>
                  </div>

                  <div className={aa.report_1}>
                    <button>
                      <img src={img_doc} alt="" />
                      <img src={img_4} alt="" />
                      <p>Отчет 6</p>
                    </button>
                  </div>

                  <div className={aa.report_1}>
                    <button>
                      <img src={img_doc} alt="" />
                      <img src={img_4} alt="" />
                      <p>Отчет 7</p>
                    </button>
                  </div>

                  <div className={aa.report_1}>
                    <button>
                      <img src={img_doc} alt="" />
                      <img src={img_4} alt="" />
                      <p>Отчет 8</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* img */}

            <div className={aa.out}>
              <img src={out} alt="" />
            </div>
          </footer>
        </div>

        {/* <section className={aa.footer}>

 <div className={aa.menu_footer}>
 <div className={aa.footer_2}>
                <div>
                            <button>
                                <div  className={aa.btn_1}>
                                    <img className={aa.imgsss} src={img_doc} alt="" />
                                    <img src={img_4} alt="" />
                                    <p>Отчет</p>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button>
                                <div  className={aa.btn_1}>
                                    <img className={aa.imgsss} src={img_doc} alt="" />
                                    <img src={img_4} alt="" />
                                    <p>Отчет</p>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button>
                                <div  className={aa.btn_1}>
                                    <img className={aa.imgsss} src={img_doc} alt="" />
                                    <img src={img_4} alt="" />
                                    <p>Отчет</p>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button>
                                <div  className={aa.btn_1}>
                                    <img className={aa.imgsss} src={img_doc} alt="" />
                                    <img src={img_4} alt="" />
                                    <p>Отчет</p>
                                </div>
                            </button>
                        </div>
                </div>
                <div className={aa.footer_3}>
                <div>
                            <button>
                                <div  className={aa.btn_1}>
                                    <img className={aa.imgsss} src={img_doc} alt="" />
                                    <img src={img_4} alt="" />
                                    <p>Отчет</p>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button>
                                <div  className={aa.btn_1}>
                                    <img className={aa.imgsss} src={img_doc} alt="" />
                                    <img src={img_4} alt="" />
                                    <p>Отчет</p>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button>
                                <div  className={aa.btn_1}>
                                    <img className={aa.imgsss} src={img_doc} alt="" />
                                    <img src={img_4} alt="" />
                                    <p>Отчет</p>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button>
                                <div  className={aa.btn_1}>
                                    <img className={aa.imgsss} src={img_doc} alt="" />
                                    <img src={img_4} alt="" />
                                    <p>Отчет</p>
                                </div>
                            </button>
                        </div>
                </div>
                <div className={aa.footer_4}>
                <div>
                            <button>
                                <div  className={aa.btn_1}>
                                    <img className={aa.imgsss} src={img_doc} alt="" />
                                    <img src={img_4} alt="" />
                                    <p>Отчет</p>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button>
                                <div  className={aa.btn_1}>
                                    <img className={aa.imgsss} src={img_doc} alt="" />
                                    <img src={img_4} alt="" />
                                    <p>Отчет</p>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button>
                                <div  className={aa.btn_1}>
                                    <img className={aa.imgsss} src={img_doc} alt="" />
                                    <img src={img_4} alt="" />
                                    <p>Отчет</p>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button>
                                <div  className={aa.btn_1}>
                                    <img className={aa.imgsss} src={img_doc} alt="" />
                                    <img src={img_4} alt="" />
                                    <p>Отчет</p>
                                </div>
                            </button>
                        </div>
                </div>
     
                        <div className={aa.out_img}>
                            <img src={out} alt="" />
                        </div>
                        
 </div>
          
            </section> */}
      </div>

      {/* <div className={aa.class_link}>
                
            </div>
            
            <div className={aa.glovv}>
               
                <div className={aa.glov}>
                    
                <div className={aa.text}>
            <h3>МИНИСТЕРСТВО СЕЛЬСКОГО ХОЗЯЙСТВА
                        КЫРГЫЗСКОЙ РЕСПУБЛИКИ
                    </h3>
                    \

                    
            </div>
            <div className={aa.imgs}>
            <div className={aa.body_menus_1}>
                <div className={aa.menus}>
                    <div className={aa.hexagons}> <Link to='/matochnoe'><button className={aa.btn}>маточное поголовье</button></Link> </div>
                    <div className={aa.hexagons}><Link to='/div'><button className={aa.btn2}>Быки (Семья)</button></Link></div>
                    <div className={aa.hexagons}>  <Link to='/machen'><button className={aa.btn3}>Быки (Собственные)</button></Link></div>
                </div>
                
            </div>
            <div></div>
                    <img className={aa.atalyks} src={atalyk} alt="" />
                    <img className={aa.korovas} src={korova} alt="" />
                    <img className={aa.li} src={lines} alt="" />
                    
                </div>
                <div className={aa.footer}>
                    <div>
                    <img src={fot} alt="" />
                    </div>
                    <div className={aa.exit}>
                    <Link to='/menu'>
                    <button className={aa.btnss}> Выход</button>
                </Link>
                    
                    </div>
                   
                </div>
            </div>
          
                </div>
            
     */}
    </div>
  );
};

export default Section;
