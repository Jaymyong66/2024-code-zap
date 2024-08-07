package codezap.template.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import codezap.template.domain.Tag;
import codezap.template.domain.Template;
import codezap.template.domain.TemplateTag;

public class FakeTemplateTagRepository implements TemplateTagRepository {

    private final List<TemplateTag> templateTags;

    public FakeTemplateTagRepository() {
        this.templateTags = new ArrayList<>();
    }

    @Override
    public List<TemplateTag> findAllByTemplate(Template template) {
        return templateTags.stream()
                .filter(templateTag -> Objects.equals(templateTag.getTemplate(), template))
                .toList();
    }

    @Override
    public List<TemplateTag> findByTagIn(List<Tag> tags) {
        return templateTags.stream()
                .filter(templateTag -> tags.contains(templateTag.getTag()))
                .toList();
    }

    @Override
    public TemplateTag save(TemplateTag entity) {
        var saved = new TemplateTag(
                entity.getTemplate(),
                entity.getTag()
        );
        templateTags.removeIf(templateTag -> Objects.equals(templateTag.getId(), entity.getId()));
        templateTags.add(saved);
        return saved;
    }

    @Override
    public <S extends TemplateTag> List<S> saveAll(Iterable<S> entities) {
        entities.forEach(this::save);
        return (List<S>) templateTags;
    }

    @Override
    public void deleteAllByTemplateId(Long id) {
        templateTags.removeIf(templateTag -> Objects.equals(templateTag.getTemplate().getId(), id));
    }

    @Override
    public List<TemplateTag> findAll() {
        return templateTags;
    }
}
