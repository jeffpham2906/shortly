import AppLayout from "./AppLayout";
import Button from "./Button";
function Boost() {
  return (
    <section className="bg-boost-desk bg-no-repeat bg-cover bg-pm-dark-violet">
      <AppLayout>
        <div className="flex items-center justify-center flex-col p-12 gap-6">
          <h1 className="text-white font-bold text-4xl tablet:text-xl tablet:text-center">
            Boost your links today
          </h1>
          <Button type="primary" rounded size="large">
            Get Started
          </Button>
        </div>
      </AppLayout>
    </section>
  );
}

export default Boost;
