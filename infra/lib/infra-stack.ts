import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as iam from '@aws-cdk/aws-iam';

export default class ReactCDKStack extends cdk.Stack {
  bucket: s3.Bucket;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.bucket = new s3.Bucket(this, 'ReactCDKBucket', {
      bucketName: 'react-cdk',
      websiteIndexDocument: 'index.html',
      blockPublicAccess: new s3.BlockPublicAccess({ restrictPublicBuckets: false })
    });

    const bucketPolicy = new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [
        `${this.bucket.bucketArn}/*`
      ],
      principals: [new iam.Anyone()],
    })
    
    this.bucket.addToResourcePolicy(bucketPolicy);
  }
}