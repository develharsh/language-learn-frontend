import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../store/globalstate";
import { ACTIONS, LearnerRegisterForDemo } from "../../store/actions";
import { Modal, Button, TextInput, Select, Grid } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconX, IconAt } from "@tabler/icons";
import { Country, State } from "country-state-city";

const CoursesJSON = [
  { value: "HINDI-BEGINNER", label: "Hindi Beginner" },
  { value: "HINDI-ADVANCED", label: "Hindi Advanced" },
  { value: "ENGLISH-BEGINNER", label: "English Beginner" },
  { value: "ENGLISH-ADVANCED", label: "English Advanced" },
];

const DemoPopup = () => {
  const { dispatch, state } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    setCountries(
      Country.getAllCountries().map((each) =>
        Object({ label: each.name, value: each.isoCode })
      )
    );
  }, []);

  const form = useForm({
    initialValues: {
      Name: "",
      Country: "",
      State: "",
      City: "",
      Email: "",
      CountryCode: "",
      Phone: "",
      EnrollingFor: "",
    },

    validate: {
      Name: (value) => (value.length ? null : "Name can't be empty"),
      Country: (value) => (value?.length ? null : "Country can't be empty"),
      State: (value) => (value?.length ? null : "State can't be empty"),
      City: (value) => (value.length ? null : "City can't be empty"),
      Email: (value) => (value.length ? null : "Email can't be empty"),
      CountryCode: (value) =>
        value.length ? null : "Country Code can't be empty",
      Phone: (value) => (value.length ? null : "Phone can't be empty"),
      EnrollingFor: (value) =>
        value?.length ? null : "Enrolling For can't be empty",
    },
  });

  useEffect(() => {
    if (form.values.Country) {
      setStates(
        State.getStatesOfCountry(form.values.Country).map((each) =>
          Object({ label: each.name, value: each.isoCode })
        )
      );
      // alert(form.values.Country);
    }
    // alert("Dummy");
  }, [form.values.Country]);

  const handleSubmit = async (values) => {
    setLoading(true);
    dispatch({ type: ACTIONS.LOADING, payload: true });
    const response = await LearnerRegisterForDemo(values);
    dispatch({ type: ACTIONS.LOADING, payload: false });
    setLoading(false);
    if (response.success) {
      showNotification({
        title: "Congrats",
        message: response.message,
        color: "teal",
        icon: <IconCheck />,
      });
      form.reset();
      dispatch({ type: ACTIONS.DEMOPOPUP, payload: false });
    } else {
      showNotification({
        title: "Oops",
        message: response.message,
        color: "red",
        icon: <IconX />,
      });
    }
  };
  return (
    <>
      <Modal
        opened={state.demoPopup}
        onClose={() => dispatch({ type: ACTIONS.DEMOPOPUP, payload: false })}
        title="Free Demo Registration - Limited Seats Only"
      >
        <form onSubmit={form.onSubmit((v) => handleSubmit(v))}>
          <TextInput
            name="Name"
            withAsterisk
            label="Name"
            placeholder="Your Good Name"
            {...form.getInputProps("Name")}
          />
          <div className="my-half"></div>
          <Select
            withAsterisk
            label="Country"
            placeholder="Click to Select"
            searchable
            clearable
            nothingFound="No options"
            data={countries}
            {...form.getInputProps("Country")}
          />
          <div className="my-half"></div>
          <Select
            withAsterisk
            label="State"
            placeholder="Click to Select"
            searchable
            clearable
            nothingFound="No options"
            data={states}
            {...form.getInputProps("State")}
          />
          <div className="my-half"></div>
          <TextInput
            name="City"
            withAsterisk
            label="City"
            placeholder="Enter City"
            {...form.getInputProps("City")}
          />
          <div className="my-half"></div>
          <TextInput
            icon={<IconAt />}
            name="Email"
            withAsterisk
            label="Email"
            placeholder="Enter Email"
            {...form.getInputProps("Email")}
          />
          <div className="my-half"></div>
          <Grid>
            <Grid.Col span={5}>
              <TextInput
                name="CountryCode"
                withAsterisk
                label="Country Code"
                placeholder="+91"
                {...form.getInputProps("CountryCode")}
              />
            </Grid.Col>
            <Grid.Col span={7}>
              <TextInput
                name="Phone"
                withAsterisk
                label="Phone"
                placeholder="Enter Phone"
                {...form.getInputProps("Phone")}
              />
            </Grid.Col>
          </Grid>
          <div className="my-half"></div>
          <Select
            withAsterisk
            label="Enrolling For"
            placeholder="Click to Select"
            searchable
            clearable
            nothingFound="No options"
            data={CoursesJSON}
            {...form.getInputProps("EnrollingFor")}
          />
          <div className="my-1">
            <Button fullWidth type="submit" loading={loading}>
              Register
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default DemoPopup;
