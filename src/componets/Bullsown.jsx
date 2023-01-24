import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import bb from "./Matochnoe.module.css";
import aa from "./Texnik.module.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Webcam from "react-webcam";
import { useState } from "react";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {} from "@mui/x-date-pickers/LocalizationProvider";
import { style } from "@mui/system";
import atalyk from "../img/atalyk1.png";

const Checkbox = ({ children, ...props }) => (
  <label style={{ marginRight: "1em" }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

const Bullsown = () => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const [value, setValue] = React.useState(null);
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  const [nav, SetNav] = useState(false);

  return (
    <div className={aa.ab_col}>
      {/* burger menu */}
      <section className={bb.menu_burger}>
        <div>
          {/* 1 */}
          <div className={bb.img_atalyk}>
            <div>
              {" "}
              <img src={atalyk} alt="" />
            </div>
          </div>

          <div className={bb.liss}>
            {" "}
            <hr />
          </div>

          {/* 2 */}
          <div className={bb.button_menu}>
            <div className={bb.button_menu_1}>
              {" "}
              <button>Сохранить</button>
            </div>
            <div className={bb.button_menu_1}>
              {" "}
              <button>Отменить</button>
            </div>
            <div className={bb.button_menu_1}>
              {" "}
              <button>Редактировать</button>
            </div>
          </div>

          {/* 3 */}

          <div className={bb.exit_menu}>
            <div className={bb.liss}>
              {" "}
              <hr />
            </div>
            <div className={bb.exit}>
              <Link to="/Section">
                <button className={bb.btn_exit}>
                  <span>Назад</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <header className={bb.content}>
        <div className={aa.text_h1}>
          <h3>БЫКИ (СЕМЯ)</h3>
        </div>

        <div className={bb.content_2}>
          {/* content_2 */}
          <div className={aa.border_input}>
            <div className={aa.input_text_cow}>
              <div className={aa.menu_text}>
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    <sup>
                      {" "}
                      <h6 className={aa.color_red}>*</h6>
                    </sup>
                    Индивидуальный номер
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=" Индивидуальный номер"
                    />
                  </Col>
                </Row>
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    Идентификационный номер
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=" Идентификационный номер"
                    />
                  </Col>
                </Row>
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    Инвентарный номер
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Инвентарный номер"
                    />
                  </Col>
                </Row>
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    код семени
                  </Form.Label>
                  <Col>
                    <Form.Control size="sm" type="text" placeholder="Кличка" />
                  </Col>
                </Row>
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    код семени
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Место рождения"
                    />
                  </Col>
                </Row>
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    <sup>
                      {" "}
                      <h6 className={aa.color_red}>*</h6>
                    </sup>{" "}
                    оригинальная кличка (FULL NAME для иностранных быков)
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Место рождения"
                    />
                  </Col>
                </Row>
              </div>

              <div className={aa.menu_text}>
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    <sup>
                      {" "}
                      <h6 className={aa.color_red}>*</h6>
                    </sup>{" "}
                    короткая кличка (SHORT NAME для иностранных быков)
                  </Form.Label>
                  <Col>
                    <Form.Control size="sm" type="text" placeholder="Линия" />
                  </Col>
                </Row>
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    <sup>
                      {" "}
                      <h6 className={aa.color_red}>*</h6>
                    </sup>{" "}
                    кличка (в хозяйстве)
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="  Породность"
                    />
                  </Col>
                </Row>
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    <sup>
                      {" "}
                      <h6 className={aa.color_red}>*</h6>
                    </sup>{" "}
                    дата рождения
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=" Семейство"
                    />
                  </Col>
                </Row>
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    компания-поставщик семени
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=" Кому принадлежит"
                    />
                  </Col>
                </Row>{" "}
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    порода
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=" Назначение коровы"
                    />
                  </Col>
                </Row>
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    Линия
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Масть и приметы"
                    />
                  </Col>
                </Row>
              </div>

              <div className={aa.cow_item}>
                <div className={aa.cow_img}>
                  <img src={file} />

                  {/* <Webcam
     
     audio={false}
     height={300}
     ref={webcamRef}
     screenshotFormat="image/jpeg"
     width={350}
    
   /> */}
                </div>

                <div className={aa.cow_color}>
                  <div className={aa.camera_div}>
                    <div>
                      <input type="file" onChange={handleChange} />
                    </div>
                    <div>
                      <button onClick={capture}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-camera-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                          <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg>
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={bb.content_3}>
          {/* content_3 */}
          <section className={aa.color_section}>
            <Tabs
              defaultActiveKey="profile"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="home" title="Генеалогия - отец ">
                <div className={aa.row_div}>
                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Индивидуальный номер отца
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder=" Индивидуальный номер отца"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Кличка отца
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Кличка  отца"
                        />
                      </Col>
                    </Row>
                  </div>
                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Дата рождения отца
                      </Form.Label>
                      <Col>
                        <div className={aa.date_width}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="profile" title="Генеалогия - мать ">
                <div className={aa.row_div}>
                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Индивидуальный номер матери
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Индивидуальный номер"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Кличка матери
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder=" Кличка"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Дата рождения матери
                      </Form.Label>
                      <Col>
                        <div className={aa.date_width}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="longer-tab" title="Генеалогия - отец отца ">
                <div className={aa.row_div}>
                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Индивидуальный номер отец отца
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Индивидуальный номер"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Кличка отец отца
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder=" Кличка"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Дата рождения отец отца
                      </Form.Label>
                      <Col>
                        <div className={aa.date_width}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="home_1" title="Генеалогия - мать отца ">
                <div className={aa.row_div}>
                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Индивидуальный номер мать отца
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Индивидуальный номер"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Кличка мать отца
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Кличка"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Дата рождения мать отца
                      </Form.Label>
                      <Col>
                        <div className={aa.date_width}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="profile_1" title="Генеалогия - отец матери ">
                <div className={aa.row_div}>
                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Индивидуальный номер отец матери
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Индивидуальный номер"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Кличка отец матери
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Кличка"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Дата рождения отец матери
                      </Form.Label>
                      <Col>
                        <div className={aa.date_width}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="longer-tab_1" title="Генеалогия - мать матери">
                <div className={aa.row_div}>
                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Индивидуальный номер мать матери
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Индивидуальный номер"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Кличка мать матери
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Кличка"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Дата рождения мать матери
                      </Form.Label>
                      <Col>
                        <div className={aa.date_width}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="home_2" title="Генеалогия - отец отца отца">
                <div className={aa.row_div}>
                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Индивидуальный номер отец отца отца
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Индивидуальный номер"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Кличка отец отца отца
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Кличка"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Дата рождения отец отца отца
                      </Form.Label>
                      <Col>
                        <div className={aa.date_width}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="profile_2" title="Генеалогия - мать отца отца">
                <div className={aa.row_div}>
                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Индивидуальный номер мать отца отца
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Индивидуальный номер"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Кличка мать отца отца
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Кличка"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Дата рождения мать отца отца
                      </Form.Label>
                      <Col>
                        <div className={aa.date_width}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>

              <Tab
                eventKey="longer-tab_2"
                title="Генеалогия - отец матери отца"
              >
                <div className={aa.row_div}>
                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Индивидуальный номер отец матери отца
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Индивидуальный номер"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Кличка отец матери отца
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Кличка"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Дата рождения отец матери отца
                      </Form.Label>
                      <Col>
                        <div className={aa.date_width}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="home_3" title="Генеалогия - мать матери отца">
                <div className={aa.row_div}>
                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Индивидуальный номер мать матери отца
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Индивидуальный номер"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Кличка мать матери отца
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Кличка"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Дата рождения мать матери отца
                      </Form.Label>
                      <Col>
                        <div className={aa.date_width}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="profile_3" title="Генеалогия - отец отца матери">
                <div className={aa.row_div}>
                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Индивидуальный номер отец отца матери
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Индивидуальный номер"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Кличка отец отца матери
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Кличка"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Дата рождения отец отца матери
                      </Form.Label>
                      <Col>
                        <div className={aa.date_width}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>

              <Tab
                eventKey="longer-tab_3"
                title="Генеалогия - мать отца матери"
              >
                <div className={aa.row_div}>
                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Индивидуальный номер мать отца матери
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Индивидуальный номер"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Кличка мать отца матери
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Кличка"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>{" "}
                        Дата рождения мать отца матери
                      </Form.Label>
                      <Col>
                        <div className={aa.date_width}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="profile_4" title="Генеалогия - отец матери матери">
                <div className={aa.row_div}>
                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Индивидуальный номер отец матери матери
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Индивидуальный номер"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Кличка отец матери матери
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Кличка"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Дата рождения отец матери матери
                      </Form.Label>
                      <Col>
                        <div className={aa.date_width}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>

              <Tab
                eventKey="longer-tab_4"
                title="Генеалогия - мать матери матери "
              >
                <div className={aa.row_div}>
                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Индивидуальный номер мать матери матери
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Индивидуальный номер"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Кличка мать матери матери
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Кличка"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={aa.row_1}>
                    <Row className={aa.row_a}>
                      <Form.Label className={aa.label_1} column="sm" lg={2}>
                        <sup>
                          {" "}
                          <h6 className={aa.color_red}>*</h6>
                        </sup>
                        Дата рождения мать матери матери
                      </Form.Label>
                      <Col>
                        <div className={aa.date_width}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </section>
        </div>
      </header>
    </div>
  );
};

export default Bullsown;
