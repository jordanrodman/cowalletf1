import { FunctionComponent } from "react";
import styles from "./Entorno.module.css";

const Entorno: FunctionComponent = () => {
  return (
    <div className={styles.entornoDiv}>
      <div className={styles.navbarDiv}>
        <div className={styles.navLinksDiv}>
          <img
            className={styles.iconCowallet1}
            alt=""
            src="../icon-cowallet-1.svg"
          />
          <div className={styles.inicioDeSesin}>
            <div className={styles.linksDiv}>
              <div className={styles.iniciarSesinDiv}>Iniciar sesión</div>
              <div className={styles.regstrateDiv}>Regístrate</div>
            </div>
            <button className={styles.showButton}>
              <button className={styles.menu2Button} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.slideDiv}>
        <img className={styles.imagenIcon} alt="" src="../imagen@2x.png" />
        <div className={styles.textoDiv}>
          <div className={styles.frameDiv}>
            <img className={styles.vectorIcon} alt="" src="../vector.svg" />
            <div className={styles.cmoSolicitarDineroAVarios}>
              <p className={styles.cmoSolicitarDinero}>
                <span
                  className={styles.sencillosPasosSpan}
                >{`¿Cómo solicitar dinero `}</span>
              </p>
              <p className={styles.aVariosConocidos}>
                <b>{`a varios conocidos? `}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.todoEn4}>
        <div className={styles.textoDiv1}>
          <div className={styles.todoEn4SencillosPasos}>
            <p className={styles.cmoSolicitarDinero}>
              <span className={styles.todoEn1}>{`Todo en `}</span>
            </p>
            <p className={styles.sencillosPasos}>
              <span className={styles.sencillosPasosSpan}>
                <span className={styles.span}>4</span>
                <span className={styles.span1}>{` `}</span>
                <span>sencillos pasos</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.pasosDiv}>
        <div className={styles.iconosYFlechas}>
          <div className={styles.groupDiv}>
            <div className={styles.iconosDiv}>
              <div className={styles.div}>
                <div className={styles.groupDiv1}>
                  <img
                    className={styles.numeroImagen11}
                    alt=""
                    src="../numero-imagen1-1@2x.png"
                  />
                  <div className={styles.textoDiv2}>
                    <div className={styles.creaTuCampaa}>Crea tu campaña</div>
                    <div className={styles.defineLasCondicionesDelPr}>
                      <p
                        className={styles.cmoSolicitarDinero}
                      >{`Define las condiciones `}</p>
                      <p className={styles.delPrstamo}>del préstamo.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.div1}>
                <div className={styles.groupDiv2}>
                  <img
                    className={styles.numeroImagen21}
                    alt=""
                    src="../numero-imagen2-1@2x.png"
                  />
                  <div className={styles.textoDiv3}>
                    <div className={styles.creaTuCuenta}>Crea tu cuenta</div>
                    <div className={styles.iniciaSesinOCreaTuPerfil}>
                      Inicia sesión o crea tu perfil
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.div2}>
                <div className={styles.groupDiv3}>
                  <img
                    className={styles.numeroImagen31}
                    alt=""
                    src="../numero-imagen3-1@2x.png"
                  />
                  <div className={styles.textoDiv4}>
                    <div className={styles.comparteDiv}>Comparte</div>
                    <div className={styles.envaleAAmigosTuCampaa}>
                      Envíale a amigos tu campaña
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.div3}>
                <div className={styles.groupDiv4}>
                  <img
                    className={styles.numeroImagen41}
                    alt=""
                    src="../numero-imagen4-1@2x.png"
                  />
                  <div className={styles.textoDiv5}>
                    <div className={styles.listoDiv}>
                      <span>¡</span>
                      <span className={styles.listoSpan}>Listo</span>
                      <span>!</span>
                    </div>
                    <div className={styles.recibeDesembolsoInvierteY}>
                      Recibe desembolso, invierte y paga
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.flechasDiv}>
              <div className={styles.flechasIlustracionDiv}>
                <img
                  className={styles.iconsaxLineararrowcircledown}
                  alt=""
                  src="../iconsaxlineararrowcircledown2.svg"
                />
                <img
                  className={styles.iconsaxLineararrowcircledown1}
                  alt=""
                  src="../iconsaxlineararrowcircledown21.svg"
                />
                <img
                  className={styles.iconsaxLineararrowcircledown2}
                  alt=""
                  src="../iconsaxlineararrowcircledown22.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.botnButton}>
        <button className={styles.botnButton1}>
          <div className={styles.botnCrearTarjeta}>
            <div
              className={styles.creaTuTarjetaDePrstamo}
            >{`Crea tu tarjeta de préstamo `}</div>
          </div>
        </button>
      </button>
    </div>
  );
};

export default Entorno;
