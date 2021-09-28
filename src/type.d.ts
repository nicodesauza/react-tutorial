interface IPeople {
    name: string;
    age: number;
    url: string;
    note?: string;
}

type PeopleState = {
    people: IPeople[]
}

type PeopleAction = {
    type: string
    people: IPeople
}

type DispatchType = (args: PeopleAction) => PeopleAction