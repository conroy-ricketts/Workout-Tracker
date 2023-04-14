import axios from 'axios';

const API_BASE_URL = 'https://wger.de/api/v2';

export const fetchExercises = async (): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/exercise/?language=2`);
    return response.data;
  } catch (error: any) {
    console.error('API request failed:', error.message);
    return null;
  }
};

export const fetchMuscles = async (): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/muscle/`);
    return response.data;
  } catch (error: any) {
    console.error('API request failed:', error.message);
    return null;
  }
};

/*
const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('https://wger.de/api/v2/exercise/?language=2');
    setData(response.data.results);
  };
  return (
    <View>
      <NavigationContainer>
        <Navbar />
        <StatusBar style="auto" />
      </NavigationContainer>
      {data.map((exercise) => (
        <Text key={exercise.id}>{exercise.name}</Text>
      ))}
    </View>
  );
}
*/