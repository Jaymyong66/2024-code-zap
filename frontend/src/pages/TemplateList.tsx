import { Flex } from '@/components/Flex';
import { Link } from 'react-router-dom';
import { TemplateItem } from '@/components/TemplateItem';
import { Text } from '@/components/Text';
import { convertToCamelCase } from '@/utils/convertToCamelCase';
import mockTemplateList from '../mocks/templateList.json';

interface ServerResponse {
  templates: {
    id: number;
    title: string;
    member: {
      id: number;
      nickname: string;
    };
    representative_snippet: {
      filename: string;
      content_summary: string;
    };
    modified_at: string;
  }[];
}

interface ClientResponse {
  templates: {
    id: number;
    title: string;
    member: {
      id: number;
      nickname: string;
    };
    representativeSnippet: {
      filename: string;
      contentSummary: string;
    };
    modifiedAt: string;
  }[];
}

const TemplateList = () => {
  const serverData: ServerResponse = mockTemplateList;
  const camelCaseData: ClientResponse = convertToCamelCase(serverData);
  const list = camelCaseData.templates;

  return (
    <Flex
      direction='column'
      justify='flex-start'
      align='flex-end'
      width='100%'
      padding='10rem 0 0 0'
      gap='3.6rem'
    >
      <Text.Body weight='bold'>{list.length} Results</Text.Body>
      <Flex direction='column' width='100%' gap='4.8rem'>
        {list.map((item) => (
          <Link to={`templates/${item.id}`}>
            <TemplateItem item={item} key={item.id} />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default TemplateList;