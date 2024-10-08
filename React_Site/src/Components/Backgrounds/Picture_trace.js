import React, { Component } from "react";
import { tsParticles, loadPolygonMaskPlugin } from "tsparticles";

class Background extends Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  containerRef = React.createRef();

  componentDidMount() {
    if (this.containerRef.current) {

      (async () => {
        await loadPolygonMaskPlugin(tsParticles);

        await tsParticles.load("tsparticles", {
          pauseOnBlur: false,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "bubble"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 40,
                duration: 2,
                opacity: 8,
                size: 6,
                speed: 3
              }
            }
          },
          particles: {
            color: {
              value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"]
            },
            links: {
              color: "random",
              distance: 40,
              enable: true,
              opacity: 0.8,
              width: 1
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              speed: 1
            },
            number: {
              value: 200
            },
            opacity: {
              animation: {
                enable: true,
                speed: 2,
                sync: false
              },
              value: { min: 0.3, max: 0.8 }
            },
            shape: {
              type: "circle"
            },
            size: {
              value: 1
            }
          },
          polygon: {
            draw: {
              enable: true,
              lineColor: "rgba(255,255,255,0.2)",
              lineWidth: 1
            },
            enable: true,
            move: {
              radius: 5
            },
            position: {
              x: 30,
              y: 10
            },
            inline: {
              arrangement: "equidistant"
            },
            scale: 1,
            type: "inline",
            url: "https://particles.js.org/images/google.svg"
            // url: "https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg"
            // url: "https://raw.githubusercontent.com/fj99/My-Files/64b1b7de0f61638ca0c7ca859f92ea75745cae01/sky.svg?token=AQOIZGLV2MBCUU7H3YF64WLEUMSHI"
            // url: "https://raw.githubusercontent.com/fj99/My-Files/deacacf880375da64efd5b59319d7653baa6be23/pattern.svg?token=AQOIZGJ7DFJ26ZNOND7M4WTEUMTME"
            // url: "https://raw.githubusercontent.com/fj99/My-Files/deacacf880375da64efd5b59319d7653baa6be23/space-bg.svg?token=AQOIZGOD3NBHLX4ZOWFEAOTEUMTPS"
            // url: "https://raw.githubusercontent.com/fj99/My-Files/main/FF_logo.png?token=GHSAT0AAAAAACDSY2CCRMGO45M6RUBI6DJIZFDHIKQ"
          },
          background: {
            color: "#000000",
            image: "",
            position: "100% 100%",
            repeat: "no-repeat",
            size: "cover"
          }
        });
      })();


    }
  }
  render() {
    return (
      <>
        <div className="custm-bg" id="tsparticles" ref={this.containerRef} />
      </>
    );
  }
}
export default Background;
