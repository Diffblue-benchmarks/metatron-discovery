/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package app.metatron.discovery.query.druid.queries;

import java.util.List;

import app.metatron.discovery.domain.workbook.configurations.filter.Filter;
import app.metatron.discovery.query.druid.AbstractQueryBuilder;

/**
 * Created by kyungtaak on 2016. 10. 21..
 */
public class PartitionRegexQueryBuilder extends AbstractQueryBuilder {

  protected PartitionRegexQueryBuilder(app.metatron.discovery.domain.workbook.configurations.datasource.DataSource dataSource) {
    super(dataSource);
  }

  public PartitionRegexQueryBuilder filters(List<Filter> reqfilters) {
    extractPartitions(reqfilters);
    return this;
  }

  @Override
  public PartitionRegexQuery build() {

    PartitionRegexQuery query = new PartitionRegexQuery();
    query.setRegExprs(mainMetaDataSource.getRegexDataSourceName(partitionMap));

    return query;
  }
}
