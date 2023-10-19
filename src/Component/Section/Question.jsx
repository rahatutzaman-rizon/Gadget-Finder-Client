

const Question = () => {
    return (
        <div className='mx-2 gap-2 bg-blue-300'>
        <h2 className="my-6 text-center text-4xl ">Information </h2>
            <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
    Know Our location
  </div>
  <div className="collapse-content"> 
    <p>Mirpur -2 road/12 technovative shop</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
    Our contact
  </div>
  <div className="collapse-content"> 
    <p>technician number: 0123893734
    </p>
    <br />
    <p>shop number:0123779233
    </p>

  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
    Online purchase available
  </div>
  <div className="collapse-content"> 
    <p>Daraz</p>
    <br />
    <p>shopbd</p>
    <br />
    <p>tech hunt</p>
  </div>
</div>




        </div>
    );
};

export default Question;