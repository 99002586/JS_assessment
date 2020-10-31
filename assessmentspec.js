describe('Suite to test classes', ()=>{
    let cust=null;
    beforeAll(()=>{
    console.log("this function is executed before any operations begin");
     })
    beforeEach(()=>{
    cust = new customer("Srikar","srikarreddy651@gmail.com","21/08/2019","9353683457",12570);
    console.log("This function is executed before every test case");
     })
    afterEach(()=>{
    cust = null;
    console.log("This function is executed after every test case");
     })
    afterAll(()=>{
    console.log("the function is the last function to execute");
     })
    it('should check for min.5 chars. in the name', ()=>{
    const cust = new customer("Srikar","srikarreddy651@gmail.com","21/08/2019","9353683457",12570)
    expect(checkname()).toBe("more than 5 letters");
     });
    /*it('should check for correct gmail format', ()=>{
    const cust = new customer("Srikar","srikarreddy651@gmail.com","21/08/2019","9353683457",12570)
    expect(cust.name).toBe("Srikar");
     });
    it('should check if  billdate is older than 1 month', ()=>{
    const cust = new customer("Srikar","srikarreddy651@gmail.com","21/08/2019","9353683457",12570)
    expect(cust.address).toBe("Bangalore");
     });
    it('should check if the phone no. is of 10 digits', ()=>{
    const cust = new customer("Srikar","srikarreddy651@gmail.com","21/08/2019","9353683457",12570)
    expect(cust.address).toBe("Bangalore");
    });
    it('should check if the bill amt. is atleast 500 rupees', ()=>{
    const cust = new customer("Srikar","srikarreddy651@gmail.com","21/08/2019","9353683457",12570)
    expect(cust.address).toBe("Bangalore");
    });*/
    
});


