import nodemailer from "nodemailer";
 
export default async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      //email id from where you have generated the pass key
      user: "night123fever@gmail.com",
      //pass key
      pass: "aaoo npob bfiw htfw"
    }
  });
 
  try {
    await transporter.sendMail({
      from: email,
      //sender email id
      to: "tajuddin.sk@techouts.co.in",
      subject: `Testing Claim NeuCoins with break tag title alignment`,
      html: 
      `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CLAIM_NEUCOINS</title>
    <link
      href="https://cdn.sanity.io/files/m9z45zss/production/bb9538c864e5dcd967e15dcf9896fea5c6048bc4.ttf"
      rel="stylesheet"
      type="text/css" />
    <style>
      * {
        box-sizing: border-box;
        padding: "0vw";
        margin: "0vw";
        text-transform: uppercase;
      }
      @font-face {
        font-family: "Trajan Pro";
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url("https://cdn.sanity.io/files/m9z45zss/production/bb9538c864e5dcd967e15dcf9896fea5c6048bc4.ttf")
            format("ttf"),
          url("trajan\ pro.ttf") format("truetype");
      }

      .trajan {
        font-family: "Trajan Pro";
        letter-spacing: -0.05em;
      }

      .helvetica {
        font-family: Arial, Helvetica, sans-serif;
      }

      .body-container {
        padding: 7.292vw 27.083vw;
      }

      .main-card {
        padding: 4.167vw 5.729vw !important;
      }

      .title {
        margin: 0 1.563vw;
        font-size: 2.396vw;
        line-height: 110%;
        letter-spacing: -2.3px;
        width: max-content !important;
        padding: 0vw 1.563vw !important;
      }

      .sub {
        margin: 1.042vw 0vw 2.083vw;
        font-size: 1.146vw;
        font-weight: 300;
        margin-bottom: 2.083vw;
        line-height: 140%;
        text-transform: initial;
      }

      .enquiryID {
        margin: 0.521vw 0;
        font-size: 2.396vw;
      }

      .taj-img {
        width: 5.573vw;
        height: 4.896vw;
        margin-bottom: 2.083vw;
      }

      .label {
        font-size: 0.938vw;
        font-weight: 300;
        margin: 0.521vw 0;
        font-family: Helvetica;
      }

      .upper {
        padding: 2.083vw;
        /* margin: 0px 5.729vw 4.167vw !important; */
      }
      .upper > .details {
        margin: 0vw;
        margin-bottom: 2.0835vw;
      }

      .lower {
        margin: 2.083vw 0;
      }

      .large {
        font-size: 1.146vw;
        margin: 0.521vw 0;
        text-transform: initial;
      }

      .info {
        line-height: 30px;
        font-size: 1.25vw;
        font-weight: 400;
        margin: 0.521vw 0;
        color: #45443f;
      }

      .circle {
        width: 3.125vw;
        height: 3.125vw;
      }

      li::marker {
        font-size: 19px;
        margin: 0;
      }

      .small {
        font-size: 0.729vw;
        text-transform: initial;
      }

      .medium {
        font-size: 1.146vw;
        line-height: 140%;
        text-transform: initial;
      }

      .x-small {
        font-size: 0.729vw;
      }

      .vertical {
        height: 1.25vw;
      }
      .flexBox {
        display: flex;
        flex-direction: column;
        margin-top: 0vw;
        gap: 1.042vw;
        margin-bottom: 1.563vw;
      }
      .divider {
        margin: 2.083vw auto;
      }
      .titleDivider {
        display: block !important;
      }
      .hypens {
        width: 3.125vw !important;
      }
      .breakTag {
        display: none !important;
      }

      @media (max-width: 640px) {
        .body-container {
          padding: 12.5vw 6.25vw;
        }

        .main-card {
          padding: 9.375vw 7.813vw !important;
        }

        .taj-img {
          width: 10.781vw;
          height: 9.375vw;
        }

        .upper {
          padding: 6.25vw 3.125vw;
          /* margin: 0px 7.813vw 9.375vw !important; */
        }

        .title {
          font-size: 5vw;
          width: max-content !important;
          padding: 0vw !important;
        }

        .lower {
          margin: 4.688vw 0;
        }

        .sub {
          font-size: 2.5vw;
          font-weight: 300;
          margin-bottom: 1.563vw;
          width: unset !important;
        }

        .enquiryID {
          font-size: 7.188vw;
          margin-top: 1.563vw;
        }

        .large {
          font-size: 3.438vw;
        }

        .label {
          font-size: 2.813vw;
        }

        .medium {
          font-size: 2.813vw;
        }

        .small {
          font-size: 2.188vw;
        }

        .x-small {
          font-size: 2.188vw;
        }

        .info {
          font-size: 3.75vw;
          font-weight: 400;
          margin-top: 1.563vw;
        }

        .circle {
          width: 9.375vw;
          height: 9.375vw;
        }

        .vertical {
          height: 3.75vw;
        }
        .flexBox {
          display: flex;
          flex-direction: row;
          margin-bottom: 4.688vw;
          gap: 20px;
        }
        .upper > .details {
          margin-bottom: 4.688vw;
        }
        .inner-box {
          width: 200px;
          word-wrap: break-word;
        }
        .divider {
          margin: 4.688vw auto;
        }
        .titleDivider {
          display: none !important;
        }
        .hypens {
          width: 6.25vw !important;
        }
        .breakTag {
          display: block !important;
        }
      }

      .table-section {
        border: 1px solid black;
        border-collapse: collapse;
      }

      .td-section {
        border: 1px solid black;
        padding: 10px;
      }
    </style>
  </head>
  <body
    class="body-container"
    style="
      background-color: #f6f5f5;
      margin: 0;
      color: #45443f;
      font-family: Helvetica, sans-serif;
      line-height: 140%;
      padding: 1px 0px;
    ">
    <div
      class="main-card"
      style="
        background-color: #fff;
        box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.1);
        margin: 140px auto;
        max-width: 880px;
        box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.1);
      ">
      <header style="margin: 0px auto 0px; padding-top: 80px">
        <div style="text-align: center">
          <img
            role="img"
            class="taj-img"
            style="cursor: pointer; margin-bottom: 32px"
            alt="taj-logo"
            src="https://cdn.sanity.io/images/ocl5w36p/production/aa07a778d013b0ef2329b698efa9d2dfa268d2a6-108x94.png" />
        </div>
        <div style="text-align: center; margin: 0px auto">
          <table style="margin: 0 auto">
            <tbody>
              <tr>
                <td>
                  <img
                    class="hypens"
                    role="img"
                    src="https://i.ibb.co/TYWQxVh/Rectangle-30.jpg"
                    alt="Rectangle-30" />
                </td>
                <td>
                  <p
                    class="trajan title"
                    style="
                      font-family: 'Trajan Pro';
                      text-transform: uppercase;
                      padding: 0 1.563vw;
                      margin: 0;
                      font-size: 46px;
                      line-height: 110%;
                      letter-spacing: -2.3px;
                      color: #45443f;
                    ">
                    NeuCoins
                    <br class="breakTag" />
                    Claim
                    <br class="breakTag" />
                    Request
                  </p>
                </td>
                <td>
                  <img
                    class="hypens"
                    role="img"
                    src="https://i.ibb.co/TYWQxVh/Rectangle-30.jpg"
                    alt="Rectangle-30" />
                </td>
              </tr>
            </tbody>
          </table>
          <p
            class="sub"
            style="
              font-size: 22px;
              font-weight: 300;
              margin: 17px auto 40px;
              line-height: 140%;
              width: 660px;
              color: #45443f;
            ">
            The request has been received on $time
          </p>
        </div>
      </header>
      <div style="padding-bottom: 1px">
        <div class="upper" style="background-color: #f6f5f5; padding: 40px">
          <div class="details" style="margin-bottom: 40px">
            <p
              class="label"
              style="
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
                color: #45443f;
              ">
              REQUEST ID
            </p>
            <p
              class="trajan enquiryID"
              id="enquiry_id"
              style="
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
                margin: 10px 0;
                font-size: 46px;
                line-height: 110%;
                color: #45443f;
              ">
              $id
            </p>
          </div>

          <div class="details" style="margin-bottom: 40px">
            <p
              class="label"
              style="font-size: 18px; font-weight: 200; margin: 10px 0">
              NAME ON RESERVATION
            </p>
            <p
              class="trajan info"
              style="
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
                color: #45443f;
              ">
              $data.customerName
            </p>
          </div>
          <div class="details" style="margin-bottom: 40px">
            <p
              class="label"
              style="
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
                color: #45443f;
              ">
              EMAIL
            </p>
            <p
              class="trajan info"
              style="
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
                text-decoration: none;
                color: #45443f;
              ">
              $data.email
            </p>
          </div>
          <div class="details" style="margin-bottom: 40px">
            <p
              class="label"
              style="
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
                color: #45443f;
              ">
              MOBILE NUMBER
            </p>
            <p
              class="trajan info inner-box"
              style="
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
                color: #45443f;
              ">
              $data.mobile
            </p>
          </div>
          <div class="details" style="margin-bottom: 40px">
            #if(!$data.confirmationNumber)
            <p
              class="label"
              style="
                color: #45443f;
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
              ">
              CONFIRMATION NUMBER / INVOICE NO
            </p>
            <p
              class="trajan info"
              style="
                color: #45443f;
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
              ">
              --
            </p>
            #else
            <p
              class="label"
              style="
                color: #45443f;
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
              ">
              CONFIRMATION NUMBER / INVOICE NO
            </p>
            <p
              class="trajan info"
              style="
                color: #45443f;
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
              ">
              $data.confirmationNumber
            </p>
            #end
          </div>

          #if($data.info) #if($data.typeOfClaim == 'STAY') #set( $stay =
          $data.info)
          <div class="details" style="margin-bottom: 40px">
            <p
              class="label"
              style="
                color: #45443f;
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
              ">
              CHECK IN
            </p>
            <p
              class="trajan info inner-box"
              style="
                color: #45443f;
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
              ">
              $stay.checkIn
            </p>
          </div>
          <div class="details" style="margin-bottom: 40px">
            <p
              class="label"
              style="
                color: #45443f;
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
              ">
              CHECK OUT
            </p>
            <p
              class="trajan info inner-box"
              style="
                color: #45443f;
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
              ">
              $stay.checkOut
            </p>
          </div>
          <div class="details" style="margin-bottom: 40px">
            <p
              class="label"
              style="
                color: #45443f;
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
              ">
              HOTEL NAME
            </p>
            <p
              class="trajan info"
              style="
                color: #45443f;
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
              ">
              $stay.hotelName
            </p>
          </div>
          #else #set( $others = $data.info)
          <div class="details" style="margin-bottom: 40px">
            <p
              class="label"
              style="
                color: #45443f;
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
              ">
              HOTEL NAME
            </p>
            <p
              class="trajan info inner-box"
              style="
                color: #45443f;
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
              ">
              $others.hotelName
            </p>
          </div>

          <div class="details" style="margin-bottom: 40px">
            #if(!$others.venueName)
            <p
              class="label"
              style="
                color: #45443f;
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
              ">
              VENUE NAME
            </p>
            <p
              class="trajan info inner-box"
              style="
                color: #45443f;
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
              ">
              --
            </p>
            #else
            <p
              class="label"
              style="
                color: #45443f;
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
              ">
              VENUE NAME
            </p>
            <p
              class="trajan info inner-box"
              style="
                color: #45443f;
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
              ">
              $others.venueName
            </p>
            #end
          </div>
          <div class="details" style="margin-bottom: 40px">
            #if(!$others.dateOfReservation)
            <p
              class="label"
              style="
                color: #45443f;
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
              ">
              DATE OF RESERVATION
            </p>
            <p
              class="trajan info"
              style="
                color: #45443f;
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
              ">
              --
            </p>
            #else
            <p
              class="label"
              style="
                color: #45443f;
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
              ">
              DATE OF RESERVATION
            </p>
            <p
              class="trajan info"
              style="
                color: #45443f;
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
              ">
              $others.dateOfReservation
            </p>
            #end
          </div>
          <div class="details" style="margin-bottom: 40px">
            #if(!$others.time)
            <p
              class="label"
              style="
                color: #45443f;
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
              ">
              APPROXIMATE TIME
            </p>
            <p
              class="trajan info"
              style="
                color: #45443f;
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
              ">
              --
            </p>
            #else
            <p
              class="label"
              style="
                color: #45443f;
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
              ">
              APPROXIMATE TIME
            </p>
            <p
              class="trajan info"
              style="
                color: #45443f;
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
              ">
              $others.time
            </p>
            #end
          </div>
          #end #end
          <div class="details" style="margin-bottom: 40px">
            <p
              class="label"
              style="
                color: #45443f;
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
              ">
              DO YOU HAVE A COPY OF YOUR HOTEL BILL?
            </p>
            <p
              class="trajan info inner-box"
              style="
                color: #45443f;
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
              ">
              #if($data.doHaveACopyOfReceipt) YES #else NO #end
            </p>
          </div>
          <div class="details" style="margin-bottom: 40px">
            #if($data.doHaveACopyOfReceipt == false)
            <p
              class="label"
              style="
                color: #45443f;
                font-size: 18px;
                font-weight: 200;
                margin: 10px 0;
              ">
              BILL AMOUNT
            </p>
            <p
              class="trajan info inner-box"
              style="
                color: #45443f;
                line-height: 30px;
                font-size: 24px;
                font-weight: 400;
                margin: 10px 0;
                font-family: 'Trajan Pro';
                letter-spacing: -0.05em;
                text-transform: uppercase;
              ">
              $data.billAmount
            </p>
            #end
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};