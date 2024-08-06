import Image from "next/image"

export default function Card() {
    return (
       <div className="container-fluid">
            <div className="row">

                <div className="col-md-4">
                    <div class="card">
                        <Image src="/assets/img/222.png" layout="responsive" className="card-img-top"width={100} height={100} alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">เมนูไก่ทอดสไปร์ซี่ แสนอร่อย.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"> 
                    <div class="card">
                        <Image src="/assets/img/24.png" layout="responsive" className="card-img-top"width={100} height={100} alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">น้ำผลไม้ปั้นแสนหวานนน กินแล้วชื่นใจ.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"> 
                    <div class="card">
                        <Image src="/assets/img/31.png" layout="responsive" className="card-img-top"width={100} height={100} alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">ร้านขายผักผลไม้ สะอาด ปอดสารพิษ สุขภาพดี.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
