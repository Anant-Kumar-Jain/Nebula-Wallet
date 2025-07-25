actor MyContract {
    var greeting: Text = "Hello, World!";

    public query func getGreeting() : async Text {
        return greeting;
    };

    public func setGreeting(newGreeting: Text) : async () {
        greeting := newGreeting;
    };
}