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

const Matochnoe = () => {
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
          <h3>МАТОЧНОЕ ПОГОЛОВЬЕ</h3>
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
                    </sup>{" "}
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
                    <sup>
                      {" "}
                      <h6 className={aa.color_red}>*</h6>
                    </sup>
                    Кличка
                  </Form.Label>
                  <Col>
                    <Form.Control size="sm" type="text" placeholder="Кличка" />
                  </Col>
                </Row>
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    <sup>
                      {" "}
                      <h6 className={aa.color_red}>*</h6>
                    </sup>{" "}
                    Дата рождения
                  </Form.Label>
                  <Col>
                    <div className={aa.date_1}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </div>
                  </Col>
                </Row>
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    <sup>
                      {" "}
                      <h6 className={aa.color_red}>*</h6>
                    </sup>{" "}
                    Место рождения
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
                    Линия
                  </Form.Label>
                  <Col>
                    <Form.Control size="sm" type="text" placeholder="Линия" />
                  </Col>
                </Row>
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    Породность
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
                    Семейство
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
                    <sup>
                      {" "}
                      <h6 className={aa.color_red}>*</h6>
                    </sup>{" "}
                    Кому принадлежит
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
                    Назначение коровы
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
                    Масть и приметы
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Масть и приметы"
                    />
                  </Col>
                </Row>
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    <sup>
                      {" "}
                      <h6 className={aa.color_red}>*</h6>
                    </sup>
                    Группа крови
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Группа крови"
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

        <section className={aa.border_input}>
          <div className={aa.input_text}>
            <div className={aa.menu_text}>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Живая масса при рождении, кг
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" Живая масса при рождении, кг "
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Живая масса в 6 месяцев, кг
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Живая масса в 6 месяцев, кг"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Живая масса в 10 месяцев, кг
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Живая масса в 10 месяцев, кг"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Живая масса в 12 месяцев, кг
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Живая масса в 12 месяцев, кг"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Живая масса в 18 месяцев, кг
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Живая масса в 18 месяцев, кг"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Живая масса при первом осеменении, кг
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Живая масса при первом осеменении, кг"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Возраст первого осеменения, мес.
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" Возраст первого осеменения, мес"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Дата осеменения (1-20)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" Дата осеменения"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Номер осеменения (1-20)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Номер осеменения"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Индивидуальный номер <br /> быка-осеменителя (1-20)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" Индивидуальный номер быка-осеменителя"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Кличка быка-осеменителя (1-20)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Кличка быка-осеменителя"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Метод случки (1-20)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" Метод случки"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Дата исследования на стельность (1-20)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Дата исследования на стельность"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Результат исследования на стельность (1-20)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Результат исследования на стельность "
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Дата отела (1-20)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Дата отела"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Результат отела (1-20)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" Результат отела"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Легкость отела (1-20)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" Легкость отела"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Индивидуальный номер приплода (один ко многим) (1-20)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Индивидуальный номер приплода (один ко многим)"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Дата запуска (1-20)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Дата запуска (1-20)"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Продолжительность сервис-периода, дней (1-20)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Продолжительность сервис-периода"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Продолжительность сухостойного периода, дней (1-20)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="родолжительность сухостойного периода"
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
                  Дата контрольного доения
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Дата контрольного доения"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Результат контрольного доения - удой, кг
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Результат контрольного доения - удой, кг"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Результат контрольного доения - жир, %
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Результат контрольного доения - жир, %"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Результат контрольного доения - белок, %
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Результат контрольного доения - белок, %"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Время доения, мин.
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Время доения, мин."
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Скорость молокоотдачи, кг/мин.
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Скорость молокоотдачи, кг/мин"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Балл за скорость молокоотдачи
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" Балл за скорость молокоотдачи"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Удой за всю лактацию, кг
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Удой за всю лактацию кг"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Удой за 305 дней, кг
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Удой за 305 дней кг"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Жир за всю лактацию, %
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" Жир за всю лактацию %"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Жир за 305 дней, %
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Жир за 305 дней %"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Белок за всю лактацию, %
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Белок за всю лактацию %"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Белок за 305 дней, %
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Белок за 305 дней %"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Дата запуска
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Дата запуска"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Количество дойных дней
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Количество дойных дней"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Перемещение - откуда
                  <br /> (наименование хозяйства/фирмы)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Перемещение - откуда (наименование хозяйства/фирмы)"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Перемещение - куда (наименование хозяйства)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Перемещение - куда (наименование хозяйства)"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Перемещение - дата
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" Перемещение - дата"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Перемещение - возраст
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" Перемещение - возраст"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  Перемещение - живая масса
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Перемещение - живая масса"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Перемещение - цель перемещения
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Перемещение - цель перемещения"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>
                  Дата выбытия
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Дата выбытия"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  Причина выбытия
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" Причина выбытия "
                  />
                </Col>
              </Row>
            </div>
          </div>
        </section>

        <section className={aa.border_input}>
          <div className={aa.border_h5}>
            <p>согласно 2017 г</p>
            <h5>Линейная оценка системы Б </h5>
          </div>
          <div className={aa.input_text}>
            <div className={aa.menu_text}>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/А/Б - дата оценки
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="дата оценки"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/А/Б - индивидуальный номер коровы
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="индивидуальный номер коровы"
                  />
                </Col>
              </Row>
              <div className={aa.row_1}>
                <Row className={aa.row_a}>
                  <Form.Label className={aa.label_1} column="sm" lg={2}>
                    ЛО/А/Б - дата рождения
                  </Form.Label>
                  <Col>
                    <div className={aa.date_width_1}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </div>
                  </Col>
                </Row>
              </div>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  ЛО/А/Б - дата отела
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Дата отела"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  ЛО/А/Б - день лактации
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="День лактации"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/А/Б - индивидуальный номер отца
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Индивидуальный номер отца"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - рост (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control size="sm" type="text" placeholder="Рост" />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - глубина туловища (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Глубина туловища"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - ширина груди (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" Ширина груди"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - молочный тип (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Молочный тип "
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - положение таза (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Положение таза"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - ширина таза (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Ширина таза"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - постановка задних ног (вид сбоку) (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Постановка задних ног"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - угол копыт (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Угол копыт"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - постановка задних ног (вид сзади) (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Постановка задних ног"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - качество костяка (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Качество костяка"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - прикрепление передних долей вымени (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Прикрепление передних долей вымени"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - глубина вымени (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Глубина вымени"
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
                  </sup>
                  ЛО/Б - высота прикрепления задних долей вымени (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Высота прикрепления задних долей вымени"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - центральная связка вымени (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Центральная связка вымени"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - расположение передних сосков вымени (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" Расположение передних сосков вымени"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>
                  ЛО/Б - расположение задних сосков вымени (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Расположение задних сосков вымени"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - длина сосков (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Длина сосков "
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>
                  ЛО/Б - длина крестца (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Длина крестца "
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>
                  ЛО/Б - линия верха (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Линия верха "
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>
                  ЛО/Б - обмускуленность (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Обмускуленность"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>
                  ЛО/Б - упитанность (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" Упитанность"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - скакательный сустав (вид сзади) (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Скакательный сустав"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - легкость движения (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Легкость движения"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>
                  ЛО/Б - ширина задних долей вымени (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Ширина задних долей вымени"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - баланс вымени (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" Баланс вымени"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - выраженность вен вымени (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Выраженность вен вымени"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - длина передних долей вымени (от 1-9)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Длина передних долей вымени"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/Б - толщина сосков (от 1-9) <br />
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Толщина сосков"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </section>

        <section className={aa.border_input}>
          <div className={aa.border_h5}>
            <p> согласно 2017 г</p>
            <h5>Линейная оценка системы А</h5>
          </div>
          <div className={aa.input_text}>
            <div className={aa.menu_text}>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/А - молочный тип (от 50-100)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="молочный тип"
                  />
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>
                  ЛО/А - объем туловища (от 50-100)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="объем туловища"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  ЛО/А - конечности (от 50-100)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="конечности "
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>
                  ЛО/А - вымя (от 50-100)
                </Form.Label>
                <Col>
                  <Form.Control size="sm" type="text" placeholder="вымя" />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  ЛО/А - итоговая оценка (от 1-100)
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="итоговая оценка"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  экстерьер по бонитировке
                </Form.Label>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="экстерьер по бонитировке"
                  />
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  мягкая спина (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>
                  горбатая спина (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  слабая поясница (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  крыловидные лопатки (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  перехват за лопатками (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  неровная линия верха (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  высокая постановка хвоста (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>
            </div>

            <div className={aa.menu_text}>
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>
                  запавший корень хвоста (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  крышевидный крестец (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  шилозадость (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  размет передних ног (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>
                  мягкие бабки (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>
                  большая межкопытная щель (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  наклонное дно вымени (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  дополнительные соски (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>
                  неправильная форма сосков (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>{" "}
                  очень тонкие соски (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>
                  перекрещивающиеся задние соски (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>{" "}
              <Row className={aa.row_a}>
                <Form.Label className={aa.label_1} column="sm" lg={2}>
                  <sup>
                    {" "}
                    <h6 className={aa.color_red}>*</h6>
                  </sup>
                  атрофия долей вымени (да/нет)
                </Form.Label>
                <Col>
                  <select className={aa.select_px}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Matochnoe;
