import { Text } from "@alura/design-system/components/Text";
import { sum } from "@alura/utils/math/sum";

function HomeScreen() {
    return (
        <main>
            <Text tag="h1">Home</Text>
            <Text tag="p">Soma de 1 e 2: {sum(1, 2)}</Text>
        </main>
    );
}

export default HomeScreen;
